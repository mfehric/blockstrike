import * as THREE from 'three'

// World + fighter ray tests. World = merged mesh (Raycaster); fighters = AABBs
// with a head zone at the top.
const rc = new THREE.Raycaster()
rc.firstHitOnly = true
const _o = new THREE.Vector3(), _d = new THREE.Vector3()

export const HEAD_SIZE = 0.32

export function rayAABB(o, d, min, max, maxT) {
  let t0 = 0, t1 = maxT
  for (let i = 0; i < 3; i++) {
    const oi = i === 0 ? o.x : i === 1 ? o.y : o.z
    const di = i === 0 ? d.x : i === 1 ? d.y : d.z
    if (Math.abs(di) < 1e-9) { if (oi < min[i] || oi > max[i]) return -1; continue }
    let a = (min[i] - oi) / di, b = (max[i] - oi) / di
    if (a > b) { const t = a; a = b; b = t }
    if (a > t0) t0 = a
    if (b < t1) t1 = b
    if (t0 > t1) return -1
  }
  return t0
}

export class Combat {
  constructor(worldMesh) { this.mesh = worldMesh }

  worldRay(o, d, max) {
    rc.set(o, d); rc.near = 0; rc.far = max
    const h = rc.intersectObject(this.mesh, false)
    return h.length ? h[0] : null
  }

  los(a, b) {
    _d.subVectors(b, a)
    const dist = _d.length()
    if (dist < 0.01) return true
    _d.divideScalar(dist)
    return !this.worldRay(a, _d, dist - 0.05)
  }

  // Nearest thing along the ray. fighters need {alive, body:{pos,height,vel}}.
  trace(o, d, maxDist, shooter, fighters, halfW) {
    let best = { dist: maxDist, kind: null, fighter: null, head: false, point: new THREE.Vector3(), normal: new THREE.Vector3(0, 1, 0) }
    const wh = this.worldRay(o, d, maxDist)
    if (wh) {
      best.dist = wh.distance; best.kind = 'world'; best.point.copy(wh.point)
      if (wh.face) best.normal.copy(wh.face.normal)
    }
    for (const f of fighters) {
      if (!f.alive || f === shooter) continue
      const p = f.body.pos, h = f.body.height
      const min = [p.x - halfW, p.y, p.z - halfW], max = [p.x + halfW, p.y + h, p.z + halfW]
      const t = rayAABB(o, d, min, max, best.dist)
      if (t >= 0 && t < best.dist) {
        best.dist = t; best.kind = 'fighter'; best.fighter = f
        best.point.copy(d).multiplyScalar(t).add(o)
        best.head = best.point.y >= p.y + h - HEAD_SIZE
        best.normal.set(-d.x, -d.y, -d.z)
      }
    }
    if (best.kind !== 'fighter') best.fighter = null
    return best.kind ? best : null
  }
}
