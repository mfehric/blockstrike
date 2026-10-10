import * as THREE from 'three'
import { Player } from './player.js'
import { CONFIG as C } from './config.js'
import { WEAPONS } from './weapons.js'

// Difficulty: reaction delay (s), aim error (deg), damage multiplier, fire-rate
// multiplier, turn speed (rad/s).
export const DIFFICULTY = {
  easy:   { react: 0.7,  aim: 7.0, dmg: 0.55, fire: 0.6, turn: 4.5 },
  normal: { react: 0.42, aim: 3.8, dmg: 0.75, fire: 0.8, turn: 7 },
  hard:   { react: 0.2,  aim: 1.7, dmg: 1.0,  fire: 1.0, turn: 12 },
}

const NAMES = ['Blaze', 'Pixel', 'Rook', 'Nova', 'Echo', 'Vex', 'Dash']
const COLORS = ['#e0644a', '#4b8bd9', '#5fb36b', '#d9a441', '#9b7be8', '#3f9a8b', '#e86fa8']
export const botName = (i) => NAMES[i % NAMES.length]
export const botColor = (i) => COLORS[i % COLORS.length]

const FOV_COS = Math.cos(1.2)   // ±69° sight cone
const _a = new THREE.Vector3(), _b = new THREE.Vector3()

export class BotBrain {
  constructor(fighter, ctx) {
    this.f = fighter
    this.ctx = ctx                     // {world, combat, nav, match}
    this.body = fighter.body
    this.path = null; this.pi = 0
    this.target = null; this.lastKnown = null; this.lostT = 99
    this.seenT = 0; this.react = 0
    this.thinkT = Math.random() * 0.15
    this.fireCd = 0.3; this.burst = 0; this.pause = 0
    this.strafeDir = Math.random() < 0.5 ? 1 : -1; this.strafeT = 0.5 + Math.random()
    this.errYaw = 0; this.errPitch = 0; this.errT = 0
    this.stuckT = 0; this.stuckRef = null; this.stuckCheck = 1
    this.weapon = 'ar'
    this.hurtBy = null; this.hurtT = 99
    this.pathT = 0
    this.wantMove = false
    this.visible = false
    this.jumpHeld = false
  }

  reset() {
    this.path = null; this.target = null; this.lastKnown = null; this.lostT = 99; this.react = 0
    this.fireCd = 0.4; this.stuckT = 0; this.hurtBy = null; this.hurtT = 99
  }

  onHurt(attacker) {
    this.hurtBy = attacker; this.hurtT = 0
    if (!this.target && attacker && attacker.alive) {
      this.lastKnown = { x: attacker.body.pos.x, y: attacker.body.pos.y, z: attacker.body.pos.z }
      this.lostT = 0
    }
  }

  eye() { return _a.set(this.body.pos.x, this.body.pos.y + this.body.eye, this.body.pos.z) }

  pickTarget(fighters) {
    const { combat } = this.ctx
    const me = this.body.pos
    const eye = new THREE.Vector3(me.x, me.y + this.body.eye, me.z)
    const fx = -Math.sin(this.body.yaw), fz = -Math.cos(this.body.yaw)
    let best = null, bd = 1e9
    for (const o of fighters) {
      if (o === this.f || !o.alive) continue
      const p = o.body.pos
      const dx = p.x - me.x, dz = p.z - me.z, dy = p.y - me.y
      const d = Math.hypot(dx, dz, dy)
      if (d > 75 || d >= bd) continue
      const dot = (dx * fx + dz * fz) / (Math.hypot(dx, dz) || 1)
      if (dot < FOV_COS && d > 9) continue
      _b.set(p.x, p.y + 1.15, p.z)
      if (!combat.los(eye, _b)) { _b.set(p.x, p.y + o.body.height - 0.15, p.z); if (!combat.los(eye, _b)) continue }
      best = o; bd = d
    }
    return best
  }

  chooseGoal() {
    const { nav } = this.ctx
    const me = this.body.pos
    let goal
    if (this.lastKnown && this.lostT < 6) goal = nav.nearest(this.lastKnown.x, this.lastKnown.y, this.lastKnown.z)
    else {
      const far = nav.nodes.filter((n) => Math.hypot(n.x - me.x, n.z - me.z) > 14)
      goal = far[(Math.random() * far.length) | 0] || nav.nodes[0]
    }
    const start = nav.nearest(me.x, me.y, me.z)
    this.path = nav.path(start, goal); this.pi = 0
    if (this.path && this.path.length > 1) this.pi = 1
  }

  update(dt, fighters, diff) {
    const { combat, match } = this.ctx
    const b = this.body, me = b.pos
    this.hurtT += dt; this.lostT += dt; this.fireCd -= dt; this.pause -= dt
    this.strafeT -= dt; this.pathT += dt; this.errT -= dt

    // ---- perception (staggered ~7 Hz)
    this.thinkT -= dt
    if (this.thinkT <= 0) {
      this.thinkT = 0.14
      const t = this.pickTarget(fighters)
      if (t && t !== this.target) { this.react = diff.react * (0.8 + Math.random() * 0.5); this.seenT = 0 }
      if (t) { this.target = t; this.lostT = 0 }
      else if (this.target && this.lostT > 0.4) { this.target = null }
      this.visible = !!t
    }
    if (this.target && !this.target.alive) { this.target = null; this.visible = false }
    if (this.target && this.visible) {
      const p = this.target.body.pos
      this.lastKnown = { x: p.x, y: p.y, z: p.z }
      this.react -= dt; this.seenT += dt
    }

    // ---- aim
    const tgt = this.target
    let wantYaw = b.yaw, wantPitch = 0, dist = 0
    if (tgt && this.visible) {
      const p = tgt.body.pos
      const ay = this.weapon === 'sniper' ? tgt.body.height - 0.15 : tgt.body.height * 0.68
      const dx = p.x - me.x, dz = p.z - me.z, dy = p.y + ay - (me.y + b.eye)
      const h = Math.hypot(dx, dz); dist = Math.hypot(h, dy)
      if (this.errT <= 0) {
        this.errT = 0.35
        const shrink = Math.max(0.55, 1 - this.seenT * 0.25)
        const e = (diff.aim * Math.PI / 180) * shrink * (1 + Math.min(1, b.hSpeed / 9) * 0.5)
        this.errYaw = (Math.random() - 0.5) * 2 * e; this.errPitch = (Math.random() - 0.5) * 2 * e * 0.7
      }
      wantYaw = Math.atan2(-dx, -dz) + this.errYaw
      wantPitch = Math.atan2(dy, h) + this.errPitch
    } else if (this.path && this.pi < this.path.length) {
      const n = this.path[this.pi]
      wantYaw = Math.atan2(-(n.x - me.x), -(n.z - me.z)); wantPitch = 0
    } else if (this.lastKnown && this.lostT < 3) {
      wantYaw = Math.atan2(-(this.lastKnown.x - me.x), -(this.lastKnown.z - me.z))
    }
    let dyaw = wantYaw - b.yaw
    dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw))
    const maxTurn = diff.turn * dt
    b.yaw += Math.max(-maxTurn, Math.min(maxTurn, dyaw))
    b.pitch += Math.max(-maxTurn, Math.min(maxTurn, wantPitch - b.pitch))

    // ---- movement intent (world space)
    let mx = 0, mz = 0, jump = false
    const engaged = tgt && this.visible
    if (engaged) {
      const dx = tgt.body.pos.x - me.x, dz = tgt.body.pos.z - me.z, h = Math.hypot(dx, dz) || 1
      const ux = dx / h, uz = dz / h
      if (this.strafeT <= 0) { this.strafeT = 0.5 + Math.random() * 1.0; if (Math.random() < 0.7) this.strafeDir *= -1 }
      let fwd = 0
      if (dist > 26) fwd = 1; else if (dist < 6) fwd = -1
      mx = ux * fwd + -uz * this.strafeDir * 0.9; mz = uz * fwd + ux * this.strafeDir * 0.9
      if (dist > 40 && this.weapon === 'sniper') { mx = 0; mz = 0 }  // snipers hold ground
      if (Math.random() < dt * 0.35 && diff.react < 0.3) jump = true
      this.path = null
    } else {
      if (!this.path || this.pi >= this.path.length || this.pathT > 8) { this.chooseGoal(); this.pathT = 0 }
      if (this.path && this.pi < this.path.length) {
        const n = this.path[this.pi]
        const dx = n.x - me.x, dz = n.z - me.z, h = Math.hypot(dx, dz)
        if (h < 1.1 && Math.abs(n.y - me.y) < 1.8) { this.pi++ }
        else { mx = dx / (h || 1); mz = dz / (h || 1) }
        if (b.onGround && Math.abs(n.y - me.y) > 3.0 && n.y > me.y) this.path = null
      }
    }
    this.wantMove = mx !== 0 || mz !== 0

    // ---- stuck handling
    this.stuckCheck -= dt
    if (this.stuckCheck <= 0) {
      this.stuckCheck = 0.5
      if (this.wantMove && this.stuckRef && Math.hypot(me.x - this.stuckRef.x, me.z - this.stuckRef.z) < 0.7) {
        this.stuckT += 0.5
        if (this.stuckT >= 0.5) jump = true
        if (this.stuckT >= 1.5) { this.stuckT = 0; this.path = null; this.strafeDir *= -1; this.lastKnown = null }
      } else this.stuckT = 0
      this.stuckRef = { x: me.x, z: me.z }
    }

    // ---- build command relative to body yaw
    const sy = Math.sin(b.yaw), cy = Math.cos(b.yaw)
    const cmd = { fwd: 0, strafe: 0, jump, crouch: false }
    if (this.wantMove) {
      const l = Math.hypot(mx, mz) || 1; mx /= l; mz /= l
      cmd.fwd = -(mx * sy + mz * cy); cmd.strafe = mx * cy - mz * sy
    }
    // keep bots from sprinting while snipers aim
    b.step(dt, cmd)
    b.events.length = 0

    // ---- weapon choice + firing
    if (engaged) {
      const want = dist < 9 ? 'shotgun' : dist > 38 ? 'sniper' : 'ar'
      if (want !== this.weapon) { this.weapon = want; this.fireCd = Math.max(this.fireCd, 0.35) }
      if (this.react <= 0 && this.fireCd <= 0 && this.pause <= 0) {
        const w = WEAPONS[this.weapon]
        // only shoot when roughly on target
        const aimErr = Math.abs(dyaw)
        if (aimErr < 0.12) {
          match.botShoot(this.f, this.weapon, diff)
          this.fireCd = (w.interval / diff.fire) * (w.auto ? 1 : 1.1)
          if (w.auto) { this.burst++; if (this.burst >= 3 + ((Math.random() * 4) | 0)) { this.burst = 0; this.pause = 0.25 + Math.random() * 0.4 } }
        }
      }
    } else this.burst = 0
  }
}

// ---------- visual model (blocky humanoid) ----------
const shared = {
  box: new THREE.BoxGeometry(1, 1, 1),
}
export class BotView {
  constructor(color) {
    this.group = new THREE.Group(); this.group.rotation.order = 'YXZ'
    const mk = (w, h, d, c, x, y, z, pivotY = 0) => {
      const m = new THREE.Mesh(shared.box, new THREE.MeshLambertMaterial({ color: c }))
      m.scale.set(w, h, d); m.position.set(x, y, z); return m
    }
    const dark = '#2a2f3d', skin = '#e8b48a'
    // legs pivot at hip
    this.legL = new THREE.Group(); this.legL.position.set(-0.14, 0.8, 0); this.legL.add(mk(0.22, 0.8, 0.24, dark, 0, -0.4, 0))
    this.legR = new THREE.Group(); this.legR.position.set(0.14, 0.8, 0); this.legR.add(mk(0.22, 0.8, 0.24, dark, 0, -0.4, 0))
    this.torso = mk(0.62, 0.68, 0.34, color, 0, 1.12, 0)
    this.head = new THREE.Group(); this.head.position.set(0, 1.62, 0)
    this.head.add(mk(0.34, 0.34, 0.34, skin, 0, 0, 0))
    this.head.add(mk(0.36, 0.1, 0.36, '#1b1f2a', 0, 0.15, 0))
    this.armL = mk(0.16, 0.6, 0.18, color, -0.4, 1.12, 0)
    this.armR = new THREE.Group(); this.armR.position.set(0.4, 1.38, 0)
    this.armR.add(mk(0.16, 0.18, 0.55, color, 0, -0.06, -0.22))
    this.armR.add(mk(0.08, 0.1, 0.5, '#1b1f2a', 0, -0.02, -0.55))
    this.group.add(this.legL, this.legR, this.torso, this.head, this.armL, this.armR)
    this.phase = 0
    this.fall = 0
    this.materials = [] ; this.group.traverse((o) => { if (o.material) this.materials.push(o.material) })
  }
  update(dt, body, alive, speed) {
    const g = this.group
    if (alive) {
      this.fall = Math.max(0, this.fall - dt * 3)
      this.phase += dt * speed * 1.1
      const s = Math.min(1, speed / 6) * 0.9
      this.legL.rotation.x = Math.sin(this.phase) * s; this.legR.rotation.x = -Math.sin(this.phase) * s
      this.armL.rotation.x = -Math.sin(this.phase) * s * 0.7
      this.head.rotation.x = body.pitch * 0.8
      this.armR.rotation.x = body.pitch
    } else this.fall = Math.min(1, this.fall + dt * 2.5)
    g.rotation.set(-this.fall * 1.45, body.yaw, 0)
  }
}
