import * as THREE from 'three'
import { rampHeight } from './map.js'

// Waypoint graph generated from the map: floor grid, platform tops, ramp spines.
export function buildNav(world, combat) {
  const nodes = []
  const HW = 0.8, H = 1.8
  const blocked = (x, y, z) => {
    for (const b of world.boxes) {
      if (x + HW > b.min[0] && x - HW < b.max[0] && z + HW > b.min[2] && z - HW < b.max[2] &&
          y + H > b.min[1] + 0.05 && y < b.max[1] - 0.05) return true
    }
    return false
  }
  const inRamp = (x, z) => {
    for (const r of world.ramps) {
      const cx = Math.min(r.x1, Math.max(r.x0, x)), cz = Math.min(r.z1, Math.max(r.z0, z))
      if (Math.hypot(cx - x, cz - z) < 1.0 && rampHeight(r, cx, cz) > 0.3) return true
    }
    return false
  }
  const add = (x, y, z, ramp = -1, idx = 0, end = false) => nodes.push({ x, y, z, ramp, idx, end, edges: [] })

  const S = world.size
  for (let x = -S + 2; x <= S - 2; x += 4) for (let z = -S + 2; z <= S - 2; z += 4) {
    if (!blocked(x, 0, z) && !inRamp(x, z)) add(x, 0, z)
  }
  // platform tops
  for (const b of world.boxes) {
    const top = b.max[1]
    if (top < 2.9 || top > 4.6 || b.min[1] > 0.1 && top - b.min[1] < 0.3) continue
    const w = b.max[0] - b.min[0], d = b.max[2] - b.min[2]
    if (w < 3 || d < 3 || b.min[1] < 0.2 && top - b.min[1] > 5) continue
    const nx = Math.max(1, Math.round((w - 1.6) / 2.5)), nz = Math.max(1, Math.round((d - 1.6) / 2.5))
    for (let i = 0; i <= nx; i++) for (let j = 0; j <= nz; j++) {
      const x = nx ? b.min[0] + 0.8 + (w - 1.6) * (i / nx) : (b.min[0] + b.max[0]) / 2
      const z = nz ? b.min[2] + 0.8 + (d - 1.6) * (j / nz) : (b.min[2] + b.max[2]) / 2
      if (blocked(x, top, z)) continue
      if (nodes.some((n) => Math.abs(n.y - top) < 0.1 && Math.hypot(n.x - x, n.z - z) < 1.5)) continue
      add(x, top, z)
    }
  }
  // ramp spines
  world.ramps.forEach((r, ri) => {
    const len = r.axis === 'x' ? r.x1 - r.x0 : r.z1 - r.z0
    const pts = []
    for (let t = 0.5; t < len - 0.5; t += 2.4) pts.push(t)
    pts.push(len - 0.5)
    // order from low end to high end
    const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2
    const list = pts.map((t) => {
      const along = r.dir > 0 ? t : len - t
      const x = r.axis === 'x' ? r.x0 + (r.dir > 0 ? t : len - t) : cx
      const z = r.axis === 'z' ? r.z0 + (r.dir > 0 ? t : len - t) : cz
      return { x, z, along }
    })
    // 'along' is distance from x0/z0; sort low->high by ramp height
    list.sort((a, b) => rampHeight(r, a.x, a.z) - rampHeight(r, b.x, b.z))
    list.forEach((p, i) => add(p.x, rampHeight(r, p.x, p.z), p.z, ri, i, i === 0 || i === list.length - 1))
  })

  const _a = new THREE.Vector3(), _b = new THREE.Vector3()
  const clear = (a, b) => {
    for (const off of [-0.4, 0, 0.4]) {
      const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1
      const ox = (-dz / l) * off, oz = (dx / l) * off
      _a.set(a.x + ox, a.y + 0.6, a.z + oz); _b.set(b.x + ox, b.y + 0.6, b.z + oz)
      if (!combat.los(_a, _b)) return false
    }
    return true
  }
  const link = (a, b, cost, oneWay) => {
    a.edges.push({ to: b, cost })
    if (!oneWay) b.edges.push({ to: a, cost })
  }
  for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
    const a = nodes[i], b = nodes[j]
    const dh = Math.hypot(a.x - b.x, a.z - b.z), dy = b.y - a.y
    if (dh > 6.5) continue
    if (a.ramp >= 0 && b.ramp >= 0) {
      if (a.ramp === b.ramp && Math.abs(a.idx - b.idx) === 1) link(a, b, dh + Math.abs(dy))
      continue
    }
    if (a.ramp >= 0 || b.ramp >= 0) {
      const r = a.ramp >= 0 ? a : b
      if (!r.end || dh > 4.6 || Math.abs(dy) > 1.0) continue
      if (clear(a, b)) link(a, b, dh + Math.abs(dy))
      continue
    }
    if (Math.abs(dy) < 0.5) { if (clear(a, b)) link(a, b, dh) }
    else if (Math.abs(dy) >= 1.0 && dh <= 6) {
      const hi = dy < 0 ? a : b, lo = dy < 0 ? b : a
      if (clear(hi, lo)) link(hi, lo, dh + 3 * Math.abs(dy), true) // drop-down only
    }
  }

  function nearest(x, y, z) {
    let best = null, bd = Infinity
    for (const n of nodes) {
      const d = (n.x - x) ** 2 + (n.z - z) ** 2 + ((n.y - y) * 3) ** 2
      if (d < bd) { bd = d; best = n }
    }
    return best
  }

  function path(from, to) {
    if (!from || !to) return null
    if (from === to) return [to]
    const g = new Map([[from, 0]]), prev = new Map(), open = [from], closed = new Set()
    const f = new Map([[from, Math.hypot(from.x - to.x, from.z - to.z)]])
    while (open.length) {
      let bi = 0
      for (let i = 1; i < open.length; i++) if (f.get(open[i]) < f.get(open[bi])) bi = i
      const cur = open.splice(bi, 1)[0]
      if (cur === to) {
        const out = [cur]; let c = cur
        while (prev.has(c)) { c = prev.get(c); out.push(c) }
        return out.reverse()
      }
      closed.add(cur)
      for (const e of cur.edges) {
        if (closed.has(e.to)) continue
        const ng = g.get(cur) + e.cost
        if (!g.has(e.to) || ng < g.get(e.to)) {
          g.set(e.to, ng); prev.set(e.to, cur)
          f.set(e.to, ng + Math.hypot(e.to.x - to.x, e.to.z - to.z) + Math.abs(e.to.y - to.y))
          if (!open.includes(e.to)) open.push(e.to)
        }
      }
    }
    return null
  }

  return { nodes, nearest, path }
}
