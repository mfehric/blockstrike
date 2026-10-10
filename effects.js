import * as THREE from 'three'

// Tracers (pooled boxes) and impact particles (one InstancedMesh).
export class Effects {
  constructor(scene) {
    this.scene = scene
    const geo = new THREE.BoxGeometry(1, 1, 1)
    this.tracers = []
    for (let i = 0; i < 40; i++) {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#fff', transparent: true, opacity: 1, depthWrite: false, fog: false }))
      m.visible = false; m.userData = { life: 0, max: 0.1 }
      scene.add(m); this.tracers.push(m)
    }
    this.ti = 0
    this.N = 320
    this.pm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: '#fff' }), this.N)
    this.pm.frustumCulled = false
    this.px = new Float32Array(this.N * 3); this.pv = new Float32Array(this.N * 3)
    this.life = new Float32Array(this.N); this.size = new Float32Array(this.N)
    this.pi = 0
    this.dummy = new THREE.Object3D()
    const z = new THREE.Matrix4().makeScale(0, 0, 0)
    for (let i = 0; i < this.N; i++) { this.pm.setMatrixAt(i, z); this.pm.setColorAt(i, new THREE.Color('#fff')) }
    scene.add(this.pm)
    this._c = new THREE.Color()
  }

  tracer(from, to, color, width, life) {
    const m = this.tracers[this.ti++ % this.tracers.length]
    const len = from.distanceTo(to)
    if (len < 0.2) return
    m.position.copy(from).add(to).multiplyScalar(0.5)
    m.lookAt(to)
    m.scale.set(width, width, len)
    m.material.color.set(color); m.material.opacity = 0.9
    m.userData.life = life; m.userData.max = life
    m.visible = true
  }

  burst(point, normal, color, n, speed = 4, size = 0.08) {
    this._c.set(color)
    for (let k = 0; k < n; k++) {
      const i = this.pi++ % this.N, j = i * 3
      this.px[j] = point.x; this.px[j + 1] = point.y; this.px[j + 2] = point.z
      this.pv[j] = (normal.x + (Math.random() - 0.5) * 1.4) * speed * (0.4 + Math.random())
      this.pv[j + 1] = (normal.y + (Math.random() - 0.3) * 1.4) * speed * (0.4 + Math.random())
      this.pv[j + 2] = (normal.z + (Math.random() - 0.5) * 1.4) * speed * (0.4 + Math.random())
      this.life[i] = 0.35 + Math.random() * 0.35; this.size[i] = size * (0.6 + Math.random() * 0.8)
      this.pm.setColorAt(i, this._c)
    }
    this.pm.instanceColor.needsUpdate = true
  }

  update(dt) {
    for (const m of this.tracers) {
      if (!m.visible) continue
      m.userData.life -= dt
      if (m.userData.life <= 0) { m.visible = false; continue }
      m.material.opacity = m.userData.life / m.userData.max
    }
    const d = this.dummy
    let any = false
    for (let i = 0; i < this.N; i++) {
      if (this.life[i] <= 0) continue
      any = true
      const j = i * 3
      this.life[i] -= dt
      if (this.life[i] <= 0) { d.scale.set(0, 0, 0) } else {
        this.pv[j + 1] -= 14 * dt
        this.px[j] += this.pv[j] * dt; this.px[j + 1] += this.pv[j + 1] * dt; this.px[j + 2] += this.pv[j + 2] * dt
        d.position.set(this.px[j], this.px[j + 1], this.px[j + 2])
        const s = this.size[i] * Math.min(1, this.life[i] * 4)
        d.scale.set(s, s, s)
      }
      d.updateMatrix(); this.pm.setMatrixAt(i, d.matrix)
    }
    if (any) this.pm.instanceMatrix.needsUpdate = true
  }
}
