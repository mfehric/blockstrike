import * as THREE from 'three'
import { CONFIG as C } from './config.js'
import { Player } from './player.js'
import { WEAPONS, Loadout } from './weapons.js'
import { BotBrain, BotView, DIFFICULTY, botName, botColor } from './bots.js'
import { sfx } from './audio.js'

export const MATCH_SECONDS = 240
export const RESPAWN_SECONDS = 2
export const BOT_COUNT = 5
const HIT_HALF = C.halfWidth + 0.08

const _o = new THREE.Vector3(), _d = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3(), _e = new THREE.Vector3()
const _up = new THREE.Vector3(0, 1, 0)

// Free-for-all match state: fighters (player + bots), scores, timer, respawns.
export class Match {
  constructor({ world, combat, nav, effects, scene, playerBody, events }) {
    Object.assign(this, { world, combat, nav, effects, scene, events })
    this.playerBody = playerBody
    this.fighters = []
    this.state = 'idle'            // idle | running | ended
    this.time = MATCH_SECONDS
    this.clock = 0
    this.feed = []
    this.diff = DIFFICULTY.normal
    this.views = []
    this.player = null
  }

  start(difficulty) {
    this.diff = DIFFICULTY[difficulty] || DIFFICULTY.normal
    for (const v of this.views) this.scene.remove(v.group)
    this.views = []
    this.fighters = []; this.feed = []; this.time = MATCH_SECONDS; this.clock = 0
    const mk = (name, color, isPlayer, body) => ({
      name, color, isPlayer, body, hp: 100, alive: false, kills: 0, deaths: 0, respawnAt: 0,
      invuln: 0, lastHurt: -99, loadout: new Loadout(), bot: null, view: null, id: this.fighters.length,
    })
    this.player = mk('You', '#ffffff', true, this.playerBody)
    this.fighters.push(this.player)
    for (let i = 0; i < BOT_COUNT; i++) {
      const body = new Player(this.world)
      const f = mk(botName(i), botColor(i), false, body)
      f.bot = new BotBrain(f, { world: this.world, combat: this.combat, nav: this.nav, match: this })
      f.view = new BotView(botColor(i)); this.scene.add(f.view.group); this.views.push(f.view)
      this.fighters.push(f)
    }
    for (const f of this.fighters) this.spawn(f, true)
    this.state = 'running'
  }

  stop() {
    for (const v of this.views) this.scene.remove(v.group)
    this.views = []; this.fighters = []; this.state = 'idle'
  }

  spawnPoint(f) {
    let best = null, bd = -1
    for (const s of this.world.spawns) {
      let md = 1e9
      for (const o of this.fighters) {
        if (o === f || !o.alive) continue
        const p = o.body.pos
        md = Math.min(md, Math.hypot(p.x - s[0], p.z - s[2], (p.y - s[1]) * 2))
      }
      md += Math.random() * 0.5
      if (md > bd) { bd = md; best = s }
    }
    return best
  }

  spawn(f, first = false) {
    const s = this.spawnPoint(f)
    const yaw = Math.atan2(s[0], s[2])    // face the arena centre
    f.body.teleport(s[0], s[1] + 0.05, s[2], yaw)
    f.hp = 100; f.alive = true; f.invuln = 1.5; f.loadout.reset()
    f.lastHurt = this.clock
    if (f.bot) f.bot.reset()
    if (f.isPlayer) this.events.onPlayerSpawn?.()
  }

  // ---- damage & kills
  damage(victim, amount, attacker, wid, head, point) {
    if (!victim.alive || victim.invuln > 0 || this.state !== 'running') return false
    victim.hp -= amount
    victim.lastHurt = this.clock
    if (attacker && attacker !== victim) {
      if (attacker.isPlayer) this.events.onHit?.({ head, kill: victim.hp <= 0, amount, point })
      if (victim.bot) victim.bot.onHurt(attacker)
    }
    if (victim.isPlayer) this.events.onPlayerHurt?.(attacker ? attacker.body.pos : null, amount)
    if (victim.hp <= 0) { this.kill(victim, attacker, wid, head); return true }
    return false
  }

  kill(victim, attacker, wid, head) {
    victim.alive = false; victim.hp = 0; victim.deaths++
    victim.respawnAt = this.clock + RESPAWN_SECONDS
    if (attacker && attacker !== victim) attacker.kills++
    this.feed.push({ t: this.clock, killer: attacker ? attacker.name : '', victim: victim.name, weapon: wid, head, mine: attacker?.isPlayer, died: victim.isPlayer, color: attacker?.color, vcolor: victim.color })
    if (this.feed.length > 6) this.feed.shift()
    this.events.onFeed?.(this.feed)
    if (victim.isPlayer) this.events.onPlayerDeath?.(attacker)
    if (attacker?.isPlayer) sfx.kill()
    const b = victim.body.pos
    this.effects.burst(_o.set(b.x, b.y + 1, b.z), _up, victim.color, 18, 5, 0.14)
  }

  // ---- shooting (used by player and bots)
  // base: unit aim direction, muzzle: tracer start.
  shoot(shooter, wid, origin, base, spread, dmgMul, muzzle) {
    const w = WEAPONS[wid]
    // orthonormal basis around the aim direction
    _r.crossVectors(base, _up).normalize(); _u.crossVectors(_r, base)
    const hits = new Map()
    const ends = []
    for (let p = 0; p < w.pellets; p++) {
      const ang = Math.random() * Math.PI * 2, rad = spread * Math.sqrt(Math.random())
      _d.copy(base).addScaledVector(_r, Math.cos(ang) * rad).addScaledVector(_u, Math.sin(ang) * rad).normalize()
      const h = this.combat.trace(origin, _d, w.range, shooter, this.fighters, HIT_HALF)
      const end = h ? h.point.clone() : origin.clone().addScaledVector(_d, 90)
      this.effects.tracer(muzzle, end, w.tracer, w.tracerWidth, w.tracerLife)
      ends.push([Math.round(end.x * 100) / 100, Math.round(end.y * 100) / 100, Math.round(end.z * 100) / 100, h && h.kind === 'world' ? 1 : 0])
      if (!h) continue
      if (h.kind === 'world') {
        this.effects.burst(h.point, h.normal, '#cfd6e4', w.pellets > 1 ? 3 : 6, 3.5, 0.07)
      } else {
        let dmg = w.dmg * (h.head ? w.headMult : 1) * dmgMul
        if (w.falloff) {
          const f = w.falloff, k = Math.min(1, Math.max(0, (h.dist - f.start) / (f.end - f.start)))
          dmg *= 1 - k * (1 - f.min)
        }
        this.effects.burst(h.point, h.normal, '#e23b3b', 7, 4, 0.08)
        const e = hits.get(h.fighter) || { dmg: 0, head: false, point: h.point.clone() }
        e.dmg += dmg; e.head = e.head || h.head; e.point.copy(h.point)
        hits.set(h.fighter, e)
      }
    }
    for (const [victim, e] of hits) this.damage(victim, e.dmg, shooter, wid, e.head, e.point)
    return ends
  }

  botShoot(f, wid, diff) {
    const b = f.body, w = WEAPONS[wid]
    _o.set(b.pos.x, b.pos.y + b.eye, b.pos.z)
    const cp = Math.cos(b.pitch)
    const dir = new THREE.Vector3(-Math.sin(b.yaw) * cp, Math.sin(b.pitch), -Math.cos(b.yaw) * cp)
    const spread = (wid === 'sniper' ? 0.004 : w.spread) + (b.hSpeed / 9) * w.moveSpread * 0.7
    const right = new THREE.Vector3().crossVectors(dir, _up).normalize()
    const muzzle = _o.clone().addScaledVector(dir, 0.9).addScaledVector(right, 0.35); muzzle.y -= 0.25
    this.shoot(f, wid, _o.clone(), dir, spread, diff.dmg, muzzle)
    // positional sound
    const p = this.playerBody.pos
    const dx = b.pos.x - p.x, dz = b.pos.z - p.z, dist = Math.hypot(dx, dz, b.pos.y - p.y)
    const g = Math.max(0, 1 - dist / 80)
    if (g > 0.02) {
      const py = this.playerBody.yaw
      const pan = (dx * Math.cos(py) - dz * Math.sin(py)) / (dist || 1)
      sfx.shot(wid, g * g * 0.8, Math.max(-1, Math.min(1, pan)))
    }
  }

  update(dt) {
    if (this.state !== 'running') return
    this.clock += dt
    this.time -= dt
    for (const f of this.fighters) {
      f.invuln = Math.max(0, f.invuln - dt)
      if (f.alive) {
        // regen after 4s without damage
        if (f.hp < 100 && this.clock - f.lastHurt > 4) f.hp = Math.min(100, f.hp + 18 * dt)
        if (f.bot) f.bot.update(dt, this.fighters, this.diff)
      } else {
        if (f.bot) { f.body.step(dt, { fwd: 0, strafe: 0, jump: false, crouch: false }); f.body.events.length = 0 }
        if (this.clock >= f.respawnAt && this.time > 0) this.spawn(f)
      }
    }
    if (this.time <= 0) {
      this.time = 0; this.state = 'ended'
      this.events.onEnd?.(this.ranking())
    }
  }

  ranking() {
    return [...this.fighters].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths)
  }

  // Interpolated bot rendering
  renderViews(dt, alpha) {
    for (const f of this.fighters) {
      if (!f.view) continue
      const b = f.body, pv = b.prev, p = b.pos
      f.view.group.position.set(pv.x + (p.x - pv.x) * alpha, pv.y + (p.y - pv.y) * alpha, pv.z + (p.z - pv.z) * alpha)
      f.view.update(dt, b, f.alive, b.onGround ? b.hSpeed : 0)
      f.view.group.visible = f.alive || f.view.fall < 1
    }
  }
}
