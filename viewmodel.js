import * as THREE from 'three'

// First-person weapon built from boxes, drawn in its own pass on top of the world.
const M = (c) => new THREE.MeshLambertMaterial({ color: c })
const box = (w, h, d, c, x = 0, y = 0, z = 0) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M(c)); m.position.set(x, y, z); return m
}
const SKIN = '#e8b48a'

function buildGun(id) {
  const g = new THREE.Group()
  if (id === 'ar') {
    g.add(box(0.07, 0.1, 0.46, '#3a4252', 0, 0, -0.1))
    g.add(box(0.035, 0.035, 0.26, '#232833', 0, 0.015, -0.46))
    g.add(box(0.06, 0.11, 0.2, '#2b3140', 0, -0.02, 0.2))
    g.add(box(0.05, 0.15, 0.07, '#ff7a4b', 0, -0.12, -0.02))
    g.add(box(0.05, 0.05, 0.05, '#232833', 0, 0.075, -0.2))
    g.add(box(0.07, 0.07, 0.07, SKIN, 0, -0.1, -0.3))   // left hand
    g.add(box(0.07, 0.09, 0.07, SKIN, 0, -0.1, 0.1))    // right hand
    g.userData.muzzle = new THREE.Vector3(0, 0.015, -0.62)
  } else if (id === 'sniper') {
    g.add(box(0.06, 0.09, 0.56, '#2f4a46', 0, 0, -0.05))
    g.add(box(0.032, 0.032, 0.62, '#1d2b29', 0, 0.015, -0.62))
    g.add(box(0.06, 0.1, 0.24, '#243835', 0, -0.025, 0.28))
    g.add(box(0.055, 0.055, 0.26, '#6fd0c4', 0, 0.085, -0.08))
    g.add(box(0.07, 0.07, 0.07, SKIN, 0, -0.08, -0.32))
    g.add(box(0.07, 0.09, 0.07, SKIN, 0, -0.1, 0.12))
    g.userData.muzzle = new THREE.Vector3(0, 0.015, -0.95)
  } else {
    g.add(box(0.075, 0.095, 0.4, '#5a3d2b', 0, 0, 0.05))
    g.add(box(0.045, 0.045, 0.6, '#2b2f38', 0, 0.02, -0.4))
    g.add(box(0.06, 0.05, 0.2, '#2b2f38', 0, -0.035, -0.32))
    g.add(box(0.08, 0.06, 0.16, '#a06a3c', 0, -0.045, -0.25))
    g.add(box(0.07, 0.07, 0.07, SKIN, 0, -0.045, -0.25))
    g.add(box(0.07, 0.09, 0.07, SKIN, 0, -0.1, 0.15))
    g.userData.muzzle = new THREE.Vector3(0, 0.02, -0.72)
  }
  return g
}

const BASE = { ar: [0.2, -0.2, -0.38], sniper: [0.2, -0.2, -0.3], shotgun: [0.2, -0.2, -0.36] }

export class ViewModel {
  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(65, 1, 0.01, 10)
    this.scene.add(new THREE.AmbientLight('#ffffff', 1.6))
    const dl = new THREE.DirectionalLight('#fff4e0', 1.8); dl.position.set(-1, 2, 1); this.scene.add(dl)
    this.root = new THREE.Group(); this.scene.add(this.root)
    this.guns = {}
    for (const id of ['ar', 'sniper', 'shotgun']) {
      const g = buildGun(id); g.visible = false; this.root.add(g); this.guns[id] = g
    }
    // muzzle flash: two crossed additive quads
    this.flash = new THREE.Group()
    const fm = new THREE.MeshBasicMaterial({ color: '#ffd27a', transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false })
    this.flash.add(new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.03), fm))
    const f2 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.2), fm); this.flash.add(f2)
    this.flash.visible = false; this.root.add(this.flash)
    this.id = 'ar'; this.guns.ar.visible = true
    this.kickZ = 0; this.kickV = 0; this.kickRot = 0; this.kickRotV = 0
    this.flashT = 0; this.sx = 0; this.sy = 0; this.bob = 0
    this.drop = 0; this.reloadAnim = 0
    this.hidden = false
  }

  setWeapon(id) {
    this.guns[this.id].visible = false
    this.id = id; this.guns[id].visible = true
    this.drop = 1
  }

  fire(power = 1, flash = 1) {
    this.kickV += 1.6 * power; this.kickRotV += 3.2 * power
    this.flashT = 0.045
    const m = this.guns[this.id].userData.muzzle
    this.flash.position.copy(m); this.flash.scale.setScalar(flash * (0.8 + Math.random() * 0.5))
    this.flash.rotation.z = Math.random() * 3
  }

  resize(aspect) { this.camera.aspect = aspect; this.camera.updateProjectionMatrix() }

  // lookX/lookY: this frame's mouse delta (px). speed: horizontal m/s.
  update(dt, lookX, lookY, speed, onGround, sliding, reloadFrac) {
    // springs
    this.kickV += (-this.kickZ * 220 - this.kickV * 22) * dt; this.kickZ += this.kickV * dt
    this.kickRotV += (-this.kickRot * 220 - this.kickRotV * 22) * dt; this.kickRot += this.kickRotV * dt
    this.flashT -= dt; this.flash.visible = this.flashT > 0
    this.drop = Math.max(0, this.drop - dt * 4.5)
    // sway: gun lags behind the look direction
    this.sx += ((-lookX * 0.0009) - this.sx) * Math.min(1, dt * 10); this.sy += ((lookY * 0.0009) - this.sy) * Math.min(1, dt * 10)
    this.sx = Math.max(-0.05, Math.min(0.05, this.sx)); this.sy = Math.max(-0.05, Math.min(0.05, this.sy))
    if (onGround && !sliding) this.bob += dt * speed * 1.15
    const amp = onGround && !sliding ? Math.min(1, speed / 9) : 0
    const bx = Math.sin(this.bob) * 0.008 * amp, by = Math.abs(Math.cos(this.bob)) * 0.01 * amp
    const b = BASE[this.id]
    const rl = reloadFrac > 0 ? Math.sin(Math.min(1, reloadFrac) * Math.PI) : 0
    this.root.position.set(b[0] + this.sx + bx, b[1] + this.sy + by - this.drop * 0.35 - rl * 0.12, b[2] + this.kickZ * 0.045)
    this.root.rotation.set(this.kickRot * 0.035 + rl * 0.5 + this.drop * 0.6, rl * 0.25 + this.sx * 1.2, this.sx * 2 + (sliding ? 0.12 : 0))
    this.root.visible = !this.hidden
  }
}
