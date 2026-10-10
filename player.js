import { CONFIG as C } from './config.js'
import { groundRampHeight } from './map.js'

// Quake-style AABB character controller. No physics engine.
// Position is the FEET centre. All state advances only in step(dt, cmd).
const EPS = 1e-4

export class Player {
  constructor(world) {
    this.world = world
    this.pos = { x: 0, y: 0, z: 0 }
    this.prev = { x: 0, y: 0, z: 0, eye: C.standEye }
    this.vel = { x: 0, y: 0, z: 0 }
    this.yaw = 0
    this.pitch = 0
    this.onGround = false
    this.crouched = false
    this.sliding = false
    this.slideCd = 0
    this.eye = C.standEye
    this.prevCrouchKey = false
    this.events = []        // consumed by game: {type, v}
    this.airTime = 0
  }

  get height() { return this.crouched ? C.crouchHeight : C.standHeight }
  get hSpeed() { return Math.hypot(this.vel.x, this.vel.z) }

  teleport(x, y, z, yaw = this.yaw) {
    this.pos.x = x; this.pos.y = y; this.pos.z = z
    this.vel.x = this.vel.y = this.vel.z = 0
    this.yaw = yaw; this.pitch = 0
    this.onGround = false; this.sliding = false; this.crouched = false
    this.eye = C.standEye
    this.snapshotPrev()
  }

  snapshotPrev() { const p = this.pos; this.prev.x = p.x; this.prev.y = p.y; this.prev.z = p.z; this.prev.eye = this.eye }

  _overlaps(x, y, z, h) {
    const hw = C.halfWidth
    for (const b of this.world.boxes) {
      if (x + hw > b.min[0] + EPS && x - hw < b.max[0] - EPS &&
          y + h > b.min[1] + EPS && y < b.max[1] - EPS &&
          z + hw > b.min[2] + EPS && z - hw < b.max[2] - EPS) return b
    }
    return null
  }

  _rampUnder(x, z) {
    const hw = C.halfWidth, R = this.world.ramps
    return Math.max(
      groundRampHeight(R, x, z),
      groundRampHeight(R, x - hw, z - hw), groundRampHeight(R, x + hw, z - hw),
      groundRampHeight(R, x - hw, z + hw), groundRampHeight(R, x + hw, z + hw))
  }

  _accel(wx, wz, wishspeed, accel, dt, capWish) {
    const ws = capWish === undefined ? wishspeed : Math.min(wishspeed, capWish)
    const cur = this.vel.x * wx + this.vel.z * wz
    const add = ws - cur
    if (add <= 0) return
    const a = Math.min(accel * wishspeed * dt, add)
    this.vel.x += a * wx; this.vel.z += a * wz
  }

  _boost() {
    const sp = this.hSpeed
    if (sp < 0.1) return
    const add = Math.min(C.slideBoost, C.slideBoostCap - sp)
    if (add > 0) { this.vel.x += (this.vel.x / sp) * add; this.vel.z += (this.vel.z / sp) * add }
    this.slideCd = C.slideBoostCooldown
    this.sliding = true
    this.events.push({ type: 'slide', v: sp + Math.max(add, 0) })
  }

  step(dt, cmd) {
    const p = this.pos, v = this.vel
    this.snapshotPrev()
    this.slideCd = Math.max(0, this.slideCd - dt)

    // --- crouch / uncrouch (needs headroom to stand) ---
    const crouchEdge = cmd.crouch && !this.prevCrouchKey
    this.prevCrouchKey = cmd.crouch
    if (cmd.crouch) this.crouched = true
    else if (this.crouched && !this._overlaps(p.x, p.y, p.z, C.standHeight)) { this.crouched = false; this.sliding = false }

    // --- wish direction ---
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw)
    let wx = -sy * cmd.fwd + cy * cmd.strafe
    let wz = -cy * cmd.fwd - sy * cmd.strafe
    const wl = Math.hypot(wx, wz)
    if (wl > 0) { wx /= wl; wz /= wl }
    const baseSpeed = C.maxSpeed * (this.crouched ? C.crouchSpeedScale : 1)
    const wishspeed = wl > 0 ? baseSpeed : 0

    const wasGround = this.onGround
    let jumped = false

    if (this.onGround) {
      // slide start by pressing crouch while running
      if (crouchEdge && !this.sliding && this.slideCd <= 0 && this.hSpeed >= C.slideMinSpeed) this._boost()
      if (cmd.jump && (C.autoBhop || this._jumpReady)) {
        v.y = C.jumpSpeed; this.onGround = false; this.sliding = false; jumped = true
        this.events.push({ type: 'jump', v: this.hSpeed })
        // no friction on the jump tick: this is what preserves speed across hops
        this._accel(wx, wz, wishspeed, C.airAccel, dt, C.airWishCap)
      } else {
        const speed = this.hSpeed
        if (speed > 0) {
          let drop
          if (this.sliding) drop = speed * C.slideFriction * dt
          else drop = Math.max(speed, C.stopSpeed) * C.friction * dt
          const s = Math.max(speed - drop, 0) / speed
          v.x *= s; v.z *= s
        }
        if (this.sliding) {
          if (!cmd.crouch || this.hSpeed < C.slideEndSpeed) this.sliding = false
          else if (wl > 0) { // steer only: rotate velocity toward the wish direction, speed unchanged
            const sp = this.hSpeed, k = C.slideSteer * dt
            v.x += wx * sp * k; v.z += wz * sp * k
            const ns = Math.hypot(v.x, v.z); v.x *= sp / ns; v.z *= sp / ns
          }
        } else {
          this._accel(wx, wz, wishspeed, C.groundAccel, dt)
        }
        v.y = 0
      }
    } else {
      this.sliding = false
      this._accel(wx, wz, wishspeed, C.airAccel, dt, C.airWishCap)
    }
    this._jumpReady = !cmd.jump

    // safety cap
    const hs = this.hSpeed
    if (hs > C.maxHSpeed) { const k = C.maxHSpeed / hs; v.x *= k; v.z *= k }

    v.y = Math.max(v.y - C.gravity * dt, -C.maxFallSpeed)

    // --- integrate & collide, one axis at a time ---
    const h = this.height
    // X
    p.x += v.x * dt
    let b = this._overlaps(p.x, p.y, p.z, h)
    if (b) { p.x = v.x > 0 ? b.min[0] - C.halfWidth - EPS : b.max[0] + C.halfWidth + EPS; v.x = 0 }
    if (this._rampUnder(p.x, p.z) - p.y > C.stepClimb) { p.x -= v.x * dt; v.x = 0 }
    // Z
    p.z += v.z * dt
    b = this._overlaps(p.x, p.y, p.z, h)
    if (b) { p.z = v.z > 0 ? b.min[2] - C.halfWidth - EPS : b.max[2] + C.halfWidth + EPS; v.z = 0 }
    if (this._rampUnder(p.x, p.z) - p.y > C.stepClimb) { p.z -= v.z * dt; v.z = 0 }
    // Y: sub-stepped so a fast fall can never skip over a thin platform
    const impact = -v.y
    let grounded = false
    const dy = v.y * dt, nsub = Math.max(1, Math.ceil(Math.abs(dy) / 0.2))
    for (let i = 0; i < nsub; i++) {
      p.y += dy / nsub
      b = this._overlaps(p.x, p.y, p.z, h)
      if (b) {
        if (v.y <= 0) { p.y = b.max[1]; grounded = true } else { p.y = b.min[1] - h - EPS }
        v.y = 0
        break
      }
    }
    // Ramps: stand on the wedge surface, walk up it, stay glued going down
    const rh = this._rampUnder(p.x, p.z)
    if (rh > -Infinity && !jumped && v.y <= 0 && p.y <= rh + 0.001) {
      p.y = rh; v.y = 0; grounded = true
    } else if (rh > -Infinity && wasGround && !jumped && !grounded && p.y - rh <= C.groundSnap && p.y >= rh) {
      p.y = rh; v.y = 0; grounded = true
    }

    this.onGround = grounded
    if (grounded && !wasGround) {
      this.events.push({ type: 'land', v: impact })
      // crouch held on landing => slide boost (slide-hop)
      if (cmd.crouch && this.slideCd <= 0 && this.hSpeed >= C.slideMinSpeed) this._boost()
    }
    this.airTime = grounded ? 0 : this.airTime + dt

    // eye height easing
    const target = this.sliding ? C.crouchEye - 0.12 : (this.crouched ? C.crouchEye : C.standEye)
    this.eye += (target - this.eye) * Math.min(1, C.crouchLerp * dt)

    // fell out of the world
    if (p.y < -3 || Math.abs(p.x) > 40 || Math.abs(p.z) > 40) {
      // safety net: never leave the arena; drop back in at the nearest spawn
      let best = this.world.spawns[0], bd = 1e9
      for (const sp of this.world.spawns) { const d = Math.hypot(sp[0] - p.x, sp[2] - p.z); if (d < bd) { bd = d; best = sp } }
      this.teleport(best[0], best[1] + 0.05, best[2])
    }
  }
}
