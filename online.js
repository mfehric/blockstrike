import * as THREE from 'three'
import { CONFIG as C } from './config.js'
import { WEAPONS, Loadout } from './weapons.js'
import { BotView } from './bots.js'
import { Match, MATCH_SECONDS, RESPAWN_SECONDS } from './match.js'
import { Net, STATE_HZ, WEAPON_BY_IDX } from './net.js'
import { sfx } from './audio.js'

const COLORS = ['#e0644a', '#4b8bd9', '#5fb36b', '#d9a441']
const _a = new THREE.Vector3(), _b = new THREE.Vector3()

// Free-for-all against the other people in a room (2-4 players).
// Phase: 'lobby' -> 'running' -> 'ended', driven by the host's sync messages.
export class OnlineMatch extends Match {
  constructor(opts) {
    super(opts)
    this.net = null
    this.phase = 'lobby'
    this.stateAcc = 0
    this.syncAcc = 0
    this.byId = new Map()           // member id -> fighter
    this.lastHit = new Map()        // attacker id -> last accepted hit time
    this.ended = false
    this.hooks = {}                 // onPhase, onPresence, onStatus
  }

  join({ code, name }) {
    this.stop()
    this.byId.clear(); this.lastHit.clear()
    this.phase = 'lobby'; this.ended = false
    this.net = new Net({ code, name, onEvent: (t, p) => this.onNet(t, p) })
    this.net.connect()
    this.time = MATCH_SECONDS; this.clock = 0
    this.state = 'idle'
  }

  leave() {
    this.net?.close(); this.net = null
    this.stop()
    this.byId.clear()
    this.phase = 'lobby'
  }

  // ---- fighters
  ensureFighters() {
    const n = this.net
    if (!n?.id) return
    if (!this.player || !this.fighters.includes(this.player)) {
      this.fighters = []
      this.player = this.mk(n.you.name, '#ffffff', true, this.playerBody)
      this.player.id = n.id
      this.player.alive = false
      this.byId.set(n.id, this.player)
      this.fighters.push(this.player)
    }
    n.members.forEach((m, i) => {
      if (m.id === n.id) { this.player.color = COLORS[i % 4]; this.player.name = m.name; return }
      let f = this.byId.get(m.id)
      if (!f) {
        const body = { pos: { x: 0, y: 0, z: 0 }, prev: { x: 0, y: 0, z: 0 }, vel: { x: 0, y: 0, z: 0 }, yaw: 0, pitch: 0, height: C.standHeight, eye: C.standEye, hSpeed: 0, onGround: true, crouched: false, sliding: false, events: [] }
        f = this.mk(m.name, COLORS[i % 4], false, body)
        f.remote = true; f.mid = m.id; f.id = m.id; f.alive = false
        f.view = new BotView(COLORS[i % 4]); this.scene.add(f.view.group); this.views.push(f.view)
        this.byId.set(m.id, f); this.fighters.push(f)
      }
      f.name = m.name; f.color = COLORS[i % 4]
    })
    // drop fighters of members who left
    for (const [id, f] of [...this.byId]) {
      if (id !== n.id && !n.members.some((m) => m.id === id)) {
        this.byId.delete(id)
        this.fighters = this.fighters.filter((x) => x !== f)
        if (f.view) { this.scene.remove(f.view.group); this.views = this.views.filter((v) => v !== f.view) }
      }
    }
  }

  mk(name, color, isPlayer, body) {
    return {
      name, color, isPlayer, body, hp: 100, alive: false, kills: 0, deaths: 0, respawnAt: 0,
      invuln: 0, lastHurt: -99, loadout: new Loadout(), bot: null, view: null, id: this.fighters.length + (isPlayer ? 0 : 1),
    }
  }

  // ---- network events
  onNet(type, p) {
    if (type === 'status') { this.hooks.onStatus?.(p); return }
    if (type === 'presence') {
      this.ensureFighters()
      this.hooks.onPresence?.(this.net.members)
      return
    }
    if (type !== 'msg') return
    const { from, d } = p
    const f = this.byId.get(from)
    switch (d.k) {
      case 'hello': break
      case 'sync': this.onSync(from, d); break
      case 'shot': this.onShot(f, d); break
      case 'hit': this.onHit(f, d); break
      case 'died': this.onDied(f, d); break
    }
  }

  onSync(from, d) {
    if (from !== this.net.hostId) return
    if (typeof d.left === 'number') this.time = d.left
    if (d.scores && typeof d.scores === 'object') {
      for (const [id, kd] of Object.entries(d.scores)) {
        const f = this.byId.get(id)
        if (f && Array.isArray(kd)) { f.kills = kd[0] | 0; f.deaths = kd[1] | 0 }
      }
    }
    if (d.phase !== this.phase) this.setPhase(d.phase)
  }

  setPhase(phase) {
    if (phase === this.phase) return
    this.phase = phase
    this.ensureFighters()
    if (phase === 'lobby') {
      this.ended = false; this.state = 'idle'; this.time = MATCH_SECONDS
      for (const f of this.fighters) { f.alive = false; f.kills = 0; f.deaths = 0 }
    } else if (phase === 'running') {
      this.state = 'running'; this.clock = 0; this.ended = false
      for (const f of this.fighters) if (!f.remote) { f.kills = 0; f.deaths = 0; this.spawn(f, true) }
    } else if (phase === 'ended') {
      this.state = 'ended'
      if (!this.ended) { this.ended = true; this.events.onEnd?.(this.ranking()) }
    }
    this.hooks.onPhase?.(phase)
  }

  // host presses start
  startRound() {
    if (!this.net?.isHost) return
    for (const f of this.fighters) { f.kills = 0; f.deaths = 0 }
    this.time = MATCH_SECONDS
    this.broadcastSync('running')
    this.setPhase('running')
  }

  backToLobby() {
    if (!this.net?.isHost) return
    this.broadcastSync('lobby')
    this.setPhase('lobby')
  }

  broadcastSync(phase = this.phase) {
    if (!this.net?.isHost) return
    const scores = {}
    for (const [id, f] of this.byId) scores[id] = [f.kills, f.deaths]
    this.net.send({ k: 'sync', phase, left: Math.round(this.time * 10) / 10, scores })
  }

  onShot(f, d) {
    if (!f || !Array.isArray(d.e) || !Array.isArray(d.o)) return
    const w = WEAPONS[d.w]
    if (!w) return
    _a.set(d.o[0], d.o[1], d.o[2])
    for (const e of d.e.slice(0, 12)) {
      if (!Array.isArray(e)) continue
      _b.set(e[0], e[1], e[2])
      this.effects.tracer(_a, _b, w.tracer, w.tracerWidth, w.tracerLife)
      if (e[3]) this.effects.burst(_b, new THREE.Vector3(0, 1, 0), '#cfd6e4', 4, 3, 0.07)
    }
    const p = this.playerBody.pos, dist = Math.hypot(_a.x - p.x, _a.y - p.y, _a.z - p.z)
    const g = Math.max(0, 1 - dist / 80)
    if (g > 0.02) sfx.shot(d.w, g * g * 0.8, Math.max(-1, Math.min(1, (_a.x - p.x) * Math.cos(this.playerBody.yaw) / (dist || 1))))
  }

  // I was hit. Loose validation: range, fire rate, line of sight, damage cap.
  onHit(attacker, d) {
    const me = this.player
    if (!attacker || !me?.alive || me.invuln > 0 || this.phase !== 'running') return
    if (d.v !== this.net.id) return
    const w = WEAPONS[d.w]
    if (!w || !(d.d > 0)) return
    const maxDmg = w.dmg * w.headMult * w.pellets * 1.05
    if (d.d > maxDmg) return
    const tr = this.net.tracks.get(attacker.mid)?.last
    const p = this.playerBody.pos
    if (tr) {
      const dist = Math.hypot(tr.x - p.x, tr.y - p.y, tr.z - p.z)
      if (dist > w.range + 4) return
      _a.set(tr.x, tr.y + 1.5, tr.z); _b.set(p.x, p.y + 1.1, p.z)
      if (!this.combat.los(_a, _b)) {
        _b.set(p.x, p.y + 1.6, p.z)               // allow a head-height peek
        if (!this.combat.los(_a, _b)) return
      }
    }
    const now = performance.now()
    const key = attacker.mid + d.w
    if (now - (this.lastHit.get(key) || 0) < w.interval * 600) return
    this.lastHit.set(key, now)
    if (this.damage(me, d.d, attacker, d.w, !!d.h, null)) {
      // damage() -> kill() already announced my death
    }
  }

  onDied(victim, d) {
    if (!victim) return
    const killer = this.byId.get(d.by) || null
    if (victim.alive || victim.hp > 0) {
      victim.alive = false; victim.hp = 0; victim.deaths++
      if (killer && killer !== victim) killer.kills++
      this.feed.push({ t: this.clock, killer: killer ? killer.name : '', victim: victim.name, weapon: d.w, head: !!d.h, mine: !!killer?.isPlayer, died: false, color: killer?.color, vcolor: victim.color })
      if (this.feed.length > 6) this.feed.shift()
      this.events.onFeed?.(this.feed)
      if (killer?.isPlayer) sfx.kill()
      const b = victim.body.pos
      this.effects.burst(_a.set(b.x, b.y + 1, b.z), new THREE.Vector3(0, 1, 0), victim.color, 18, 5, 0.14)
    }
  }

  // ---- overrides of the bot match
  damage(victim, amount, attacker, wid, head, point) {
    if (!victim.alive || victim.invuln > 0 || this.phase !== 'running') return false
    if (victim.remote) {
      // The shooter decides the hit; the victim validates and applies it.
      if (attacker?.isPlayer) this.events.onHit?.({ head, kill: victim.hp - amount <= 0, amount, point })
      victim.hp = Math.max(1, victim.hp - amount)    // display only
      this.net.send({ k: 'hit', v: victim.mid, d: Math.round(amount * 10) / 10, w: wid, h: head ? 1 : 0 }, [victim.mid])
      return false
    }
    return super.damage(victim, amount, attacker, wid, head, point)
  }

  kill(victim, attacker, wid, head) {
    super.kill(victim, attacker, wid, head)
    if (victim.isPlayer) this.net?.send({ k: 'died', v: this.net.id, by: attacker?.mid || null, w: wid, h: head ? 1 : 0 })
  }

  // my shots: also tell everyone where the tracers went (called by Game)
  announceShot(wid, origin, ends) {
    this.net?.send({ k: 'shot', w: wid, o: [round(origin.x), round(origin.y), round(origin.z)], e: ends })
  }

  update(dt) {
    if (!this.net || this.net.status !== 'open') return
    this.ensureFighters()
    if (this.phase === 'running') {
      this.clock += dt
      this.time = Math.max(0, this.time - dt)
    }
    const me = this.player
    if (me) {
      me.invuln = Math.max(0, me.invuln - dt)
      if (this.phase === 'running') {
        if (me.alive && me.hp < 100 && this.clock - me.lastHurt > 4) me.hp = Math.min(100, me.hp + 18 * dt)
        if (!me.alive && this.clock >= me.respawnAt) this.spawn(me)
      }
    }
    // remotes follow their interpolated tracks
    for (const f of this.fighters) {
      if (!f.remote) continue
      const s = this.net.tracks.get(f.mid)?.sample()
      if (!s) continue
      const b = f.body
      b.prev.x = b.pos.x; b.prev.y = b.pos.y; b.prev.z = b.pos.z
      const dx = s.x - b.pos.x, dz = s.z - b.pos.z
      b.pos.x = s.x; b.pos.y = s.y; b.pos.z = s.z
      b.yaw = s.yaw; b.pitch = s.pitch
      b.crouched = !!(s.fl & 1); b.sliding = !!(s.fl & 2); b.height = b.crouched ? C.crouchHeight : C.standHeight
      b.hSpeed = Math.hypot(dx, dz) * 60
      const wasAlive = f.alive
      f.alive = !!(s.fl & 4)
      f.hp = s.hp
      f.loadout.cur = WEAPON_BY_IDX[s.w] || 'ar'
      if (f.alive && !wasAlive) f.invuln = 0
    }
    // 20 Hz state out
    this.stateAcc += dt
    if (this.stateAcc >= 1 / STATE_HZ) {
      this.stateAcc = 0
      this.net.sendState(this.playerBody, me?.alive && this.phase === 'running', me?.loadout.cur || 'ar', me?.hp ?? 100)
    }
    // host: clock + scoreboard once a second, end the round at zero
    this.syncAcc += dt
    if (this.net.isHost && this.syncAcc >= 1) {
      this.syncAcc = 0
      if (this.phase === 'running' && this.time <= 0) {
        this.broadcastSync('ended'); this.setPhase('ended')
      } else this.broadcastSync()
    }
  }

  renderViews(dt, alpha) {
    for (const f of this.fighters) {
      if (!f.view) continue
      const b = f.body
      f.view.group.position.set(b.pos.x, b.pos.y, b.pos.z)
      f.view.update(dt, b, f.alive, f.alive ? b.hSpeed : 0)
      f.view.group.visible = this.phase === 'running' && (f.alive || f.view.fall < 1)
    }
  }
}

const round = (v) => Math.round(v * 100) / 100
