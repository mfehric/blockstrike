import * as THREE from 'three'
import { CONFIG as C } from './config.js'
import { buildMap } from './map.js'
import { Player } from './player.js'
import { Input } from './input.js'
import { sfx } from './audio.js'
import { Combat } from './combat.js'
import { Effects } from './effects.js'
import { ViewModel } from './viewmodel.js'
import { buildNav } from './nav.js'
import { Match } from './match.js'
import { OnlineMatch } from './online.js'
import { WEAPONS } from './weapons.js'

const STEP = 1 / C.tickRate
const LOOK = 0.0022

// Owns the renderer, the fixed-step loop and interpolation. Rendering happens
// at display rate with `alpha` blending the previous and current sim state.
export class Game {
  constructor(canvas, settings) {
    this.settings = settings
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' })
    this.dprMax = Math.min(window.devicePixelRatio || 1, 2)
    this.scale = Math.min(settings.scale || 1, 1)       // user render scale (1 = native)
    this.curScale = this.scale                          // adaptive scale actually in use
    this.slowT = 0; this.fastT = 0
    this.renderer.setPixelRatio(this.dprMax * this.curScale)
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#9fc4e8')
    this.scene.fog = new THREE.Fog('#9fc4e8', 45, 120)
    this.camera = new THREE.PerspectiveCamera(settings.fov, 1, 0.05, 200)
    this.camera.rotation.order = 'YXZ'
    this.world = buildMap()
    this.scene.add(this.world.mesh)
    this.addSky()
    this.player = new Player(this.world)
    const s = this.world.spawns[0]
    this.player.teleport(s[0], s[1], s[2], -Math.PI / 4)
    this.combat = new Combat(this.world.mesh)
    this.nav = buildNav(this.world, this.combat)
    this.effects = new Effects(this.scene)
    this.vm = new ViewModel()
    this.scene.add(new THREE.AmbientLight('#ffffff', 1.5))
    const sun = new THREE.DirectionalLight('#fff2d8', 1.6); sun.position.set(-30, 60, 20); this.scene.add(sun)
    this.renderer.autoClear = false
    this.hooks = {}                 // set by the UI: onEnd, onFeed, ...
    this.dmgNums = []               // {pos, text, head, life}
    this.hitMarker = { t: 0, kind: 'hit' }
    this.hurt = { t: 0, angle: 0 }
    this.scoped = false
    this.triggerHeld = false
    this.kickP = 0; this.kickY = 0
    this.deadBlend = 0
    this.lookDX = 0; this.lookDY = 0
    const ev = {
      onHit: (e) => {
        sfx.hit(e.head)
        this.hitMarker = { t: 0.22, kind: e.kill ? 'kill' : e.head ? 'head' : 'hit' }
        this.dmgNums.push({ pos: e.point.clone(), text: String(Math.round(e.amount)), head: e.head, kill: e.kill, life: 0.9, max: 0.9 })
        if (this.dmgNums.length > 14) this.dmgNums.shift()
      },
      onPlayerHurt: (from, amt) => {
        this.hurt.t = 1
        if (from) {
          const p = this.player.pos
          const a = Math.atan2(-(from.x - p.x), -(from.z - p.z))
          this.hurt.angle = a - this.player.yaw
        }
        sfx.hurt()
      },
      onPlayerDeath: () => { sfx.die(); this.deadBlend = 0 },
      onPlayerSpawn: () => { this.deadBlend = 0; this.kickP = this.kickY = 0; this.vm.setWeapon('ar') },
      onFeed: (f) => this.hooks.onFeed?.(f),
      onEnd: (r) => this.hooks.onEnd?.(r),
    }
    this.matchOpts = { world: this.world, combat: this.combat, nav: this.nav, effects: this.effects, scene: this.scene, playerBody: this.player, events: ev }
    this.botMatch = new Match(this.matchOpts)
    this.match = this.botMatch
    this.onlineMatch = null
    this.input = new Input(canvas)
    this.active = false
    this.acc = 0
    this.last = 0
    this.raf = 0
    this.roll = 0
    this.dip = 0; this.dipV = 0
    this.fov = settings.fov
    this.stepTimer = 0
    this.frames = 0; this.fpsT = 0; this.fps = 0
    this.onFrame = null
    this.resizeObs = new ResizeObserver(() => this.resize())
    this.resizeObs.observe(canvas)
    this.canvas = canvas
    this.resize()
    this.loop = this.loop.bind(this)
    this.raf = requestAnimationFrame(this.loop)
  }

  addSky() {
    // Blocky floating clouds: one instanced mesh, 1 draw call
    const g = new THREE.BoxGeometry(1, 1, 1)
    const m = new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false })
    const n = 14
    const im = new THREE.InstancedMesh(g, m, n)
    const d = new THREE.Object3D()
    for (let i = 0; i < n; i++) {
      d.position.set((Math.random() - 0.5) * 220, 38 + Math.random() * 14, (Math.random() - 0.5) * 220)
      d.scale.set(10 + Math.random() * 18, 2 + Math.random() * 2, 6 + Math.random() * 10)
      d.updateMatrix(); im.setMatrixAt(i, d.matrix)
    }
    this.scene.add(im)
  }

  resize() {
    const w = this.canvas.clientWidth || 800, h = this.canvas.clientHeight || 600
    this.cssW = w; this.cssH = h
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.vm?.resize(w / h)
  }

  // Online rooms (window.mobius.live). The returned match drives lobby + play.
  startOnline(code, name) {
    this.leaveOnline()
    this.onlineMatch = new OnlineMatch(this.matchOpts)
    this.match = this.onlineMatch
    this.dmgNums.length = 0; this.hurt.t = 0; this.triggerHeld = false
    this.onlineMatch.join({ code, name })
    return this.onlineMatch
  }

  leaveOnline() {
    if (this.onlineMatch) { this.onlineMatch.leave(); this.onlineMatch = null }
    this.match = this.botMatch
    this.scoped = false
  }

  startMatch(difficulty) {
    this.leaveOnline()
    this.match.start(difficulty)
    this.dmgNums.length = 0; this.hurt.t = 0; this.triggerHeld = false
  }

  setActive(v) {
    this.active = v
    this.input.setEnabled(v)
    this.last = performance.now(); this.acc = 0
    if (!v) sfx.slide(false)
  }

  applySettings(s) {
    this.settings = s
    this.scale = Math.min(s.scale || 1, 1)
    this.curScale = Math.min(this.curScale, this.scale)
    this.applyScale()
  }

  applyScale() { this.renderer.setPixelRatio(this.dprMax * this.curScale); this.resize() }

  aimDir(out) {
    const pl = this.player, cp = Math.cos(pl.pitch)
    return out.set(-Math.sin(pl.yaw) * cp, Math.sin(pl.pitch), -Math.cos(pl.yaw) * cp)
  }

  weapons(f, inp) {
    const pl = this.player, L = f.loadout
    for (let n = 1; n <= 3; n++) {
      if (inp.consumeEdge('Digit' + n)) {
        const id = ['ar', 'sniper', 'shotgun'][n - 1]
        if (L.select(id)) { this.vm.setWeapon(id); sfx.switchGun() }
      }
    }
    if (inp.consumeEdge('KeyR') && L.reload()) sfx.reload()
    L.update(STEP)
    const w = L.w
    this.scoped = w.id === 'sniper' && (inp.mouseButtons & 2) !== 0 && L.switchT <= 0 && L.reloadT <= 0
    const trigger = (inp.mouseButtons & 1) !== 0
    const fire = trigger && (w.auto || !this.triggerHeld)
    this.triggerHeld = trigger
    if (fire) {
      if (L.canFire()) {
        const idx = L.consume()
        const dir = this.aimDir(new THREE.Vector3())
        const origin = new THREE.Vector3(pl.pos.x, pl.pos.y + pl.eye, pl.pos.z)
        const right = new THREE.Vector3(Math.cos(pl.yaw), 0, -Math.sin(pl.yaw))
        const muzzle = origin.clone().addScaledVector(dir, 0.9).addScaledVector(right, 0.22); muzzle.y -= 0.2
        const moving = Math.min(1, pl.hSpeed / C.maxSpeed) + (pl.onGround ? 0 : 1.2)
        let spread = w.spread + w.moveSpread * moving
        if (w.id === 'sniper') spread = this.scoped ? w.scopedSpread + 0.004 * moving : w.spread
        if (w.id === 'shotgun') spread = w.spread
        const ends = this.match.shoot(f, w.id, origin, dir, spread, 1, muzzle)
        this.match.announceShot?.(w.id, muzzle, ends)
        sfx.shot(w.id, 0.9, 0)
        const rc = w.recoil[Math.min(idx, w.recoil.length - 1)]
        this.kickP += rc[0]; this.kickY += rc[1] * (idx % 2 ? 1 : -0.6)
        this.vm.fire(w.id === 'ar' ? 0.7 : 1.4, w.flash)
        if (L.ammo[w.id] === 0 && L.reserve[w.id] > 0 && L.reload()) sfx.reload()
      } else if (L.ammo[w.id] === 0 && L.cd <= 0 && L.reloadT <= 0) {
        if (L.reserve[w.id] > 0) { if (L.reload()) sfx.reload() } else sfx.empty()
      }
    }
  }

  simStep() {
    const pl = this.player, inp = this.input, f = this.match.player
    const alive = f.alive
    const cmd = alive ? inp.snapshot() : { fwd: 0, strafe: 0, jump: false, crouch: false }
    pl.step(STEP, cmd)
    for (const e of pl.events) {
      if (e.type === 'jump') sfx.jump()
      else if (e.type === 'land') {
        sfx.land(e.v)
        this.dipV -= Math.min(e.v, 22) * C.landDip * 10
      } else if (e.type === 'slide') sfx.slideStart()
    }
    pl.events.length = 0
    sfx.slide(alive && pl.sliding && pl.onGround, pl.hSpeed)
    if (alive && pl.onGround && !pl.sliding && pl.hSpeed > 2) {
      this.stepTimer += STEP * pl.hSpeed
      if (this.stepTimer > (pl.crouched ? 3.2 : 4.2)) { this.stepTimer = 0; sfx.step() }
    }
    if (alive) this.weapons(f, inp); else { this.scoped = false; this.triggerHeld = false }
    if (!this.match.net) this.match.update(STEP)
    if (this.hitMarker.t > 0) this.hitMarker.t -= STEP
  }

  loop(now) {
    this.raf = requestAnimationFrame(this.loop)
    if (!this.last) this.last = now
    let dt = Math.min(0.1, (now - this.last) / 1000)
    this.last = now
    const pl = this.player

    if (this.active) {
      const [dx, dy] = this.input.consumeLook()
      this.lookDX = dx; this.lookDY = dy
      const wpn = WEAPONS[this.match.player?.loadout.cur || 'ar']
      const k = LOOK * this.settings.sensitivity * (this.scoped ? wpn.scopeSens : 1)
      if (this.match.player?.alive) {
        pl.yaw -= dx * k
        pl.pitch = Math.max(-1.55, Math.min(1.55, pl.pitch - dy * k))
        // smooth recoil: pending kick bleeds into the view angles
        const kk = Math.min(1, dt * 30)
        pl.pitch = Math.min(1.55, pl.pitch + this.kickP * kk); pl.yaw += this.kickY * kk
        this.kickP -= this.kickP * kk; this.kickY -= this.kickY * kk
      }
      this.acc += dt
      let n = 0
      while (this.acc >= STEP && n++ < 8) { this.simStep(); this.acc -= STEP }
      if (n >= 8) this.acc = 0
    }

    // --- interpolated camera ---
    const a = this.acc / STEP
    const pv = pl.prev, p = pl.pos
    const ex = pv.x + (p.x - pv.x) * a
    const ey = pv.y + (p.y - pv.y) * a + pv.eye + (pl.eye - pv.eye) * a
    const ez = pv.z + (p.z - pv.z) * a

    // landing dip spring + strafe roll + speed FOV
    this.dipV += (-this.dip * 140 - this.dipV * 14) * dt
    this.dip += this.dipV * dt
    const sy = Math.sin(pl.yaw), cy = Math.cos(pl.yaw)
    const lateral = pl.vel.x * cy - pl.vel.z * sy
    this.roll += ((-lateral * 0.0035) - this.roll) * Math.min(1, dt * 10)
    const sp = pl.hSpeed
    const me = this.match.player
    const alive = !me || me.alive || this.match.state !== 'running'
    const wid = me ? me.loadout.cur : 'ar'
    const fovT = this.scoped ? WEAPONS.sniper.scopeFov : this.settings.fov + C.fovSpeedKick * Math.min(1, Math.max(0, (sp - C.maxSpeed) / 8))
    this.fov += (fovT - this.fov) * Math.min(1, dt * (this.scoped ? 16 : 6))
    if (Math.abs(this.camera.fov - this.fov) > 0.01) { this.camera.fov = this.fov; this.camera.updateProjectionMatrix() }
    if (!alive) this.deadBlend = Math.min(1, this.deadBlend + dt * 2.2)
    else this.deadBlend = 0
    const db = this.deadBlend
    this.camera.position.set(ex, (ey + this.dip) * (1 - db) + (pl.pos.y + 0.3) * db, ez)
    this.camera.rotation.set(pl.pitch * (1 - db * 0.6), pl.yaw, this.roll + db * 0.7)

    const online = !!this.match.net
    if (online) this.match.update(dt)          // real-time: runs even while paused
    if (this.active || online) {
      this.match.renderViews(dt, a)
      this.effects.update(dt)
      this.hurt.t = Math.max(0, this.hurt.t - dt * 1.6)
      for (let i = this.dmgNums.length - 1; i >= 0; i--) { this.dmgNums[i].life -= dt; if (this.dmgNums[i].life <= 0) this.dmgNums.splice(i, 1) }
    }
    const reloadFrac = me && me.loadout.reloadT > 0 ? 1 - me.loadout.reloadT / WEAPONS[wid].reload : 0
    this.vm.hidden = this.scoped || !alive || this.match.state !== 'running'
    this.vm.update(dt, this.lookDX, this.lookDY, pl.hSpeed, pl.onGround, pl.sliding, reloadFrac)
    this.lookDX = this.lookDY = 0

    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
    if (!this.vm.hidden) { this.renderer.clearDepth(); this.renderer.render(this.vm.scene, this.vm.camera) }

    this.frames++; this.fpsT += dt
    if (this.fpsT >= 0.5) {
      this.fps = Math.round(this.frames / this.fpsT); this.frames = 0; this.fpsT = 0
      // adaptive resolution: trade sharpness for a steady 60 FPS
      if (this.active) {
        if (this.fps < 54) { this.slowT += 0.5; this.fastT = 0 } else if (this.fps >= 59) { this.fastT += 0.5; this.slowT = 0 } else { this.slowT = this.fastT = 0 }
        if (this.slowT >= 1 && this.curScale > 0.45) { this.curScale = Math.max(0.45, this.curScale - 0.15); this.slowT = 0; this.applyScale() }
        else if (this.fastT >= 6 && this.curScale < this.scale) { this.curScale = Math.min(this.scale, this.curScale + 0.1); this.fastT = 0; this.applyScale() }
      }
    }
    if (this.onFrame) this.onFrame(this)
  }

  dispose() {
    cancelAnimationFrame(this.raf)
    this.resizeObs.disconnect()
    this.input.dispose()
    sfx.slide(false)
    this.world.mesh.geometry.dispose()
    this.match.stop()
    this.renderer.dispose()
  }
}
