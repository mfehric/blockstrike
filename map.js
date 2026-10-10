import * as THREE from 'three'

// Procedural arena. Everything static is merged into ONE vertex-coloured mesh
// (one draw call). Collision uses axis-aligned boxes plus analytic wedge ramps.

const SHADE = { top: 1.0, bottom: 0.45, x: 0.78, z: 0.62 }

function hex(c) { const k = new THREE.Color(c); return [k.r, k.g, k.b] }

export function buildMap() {
  const pos = [], col = [], idx = []
  const boxes = []   // {min:[x,y,z], max:[x,y,z]}
  const ramps = []   // {x0,x1,z0,z1,y0,y1,axis:'x'|'z',dir:1|-1} height rises along +dir of axis
  const spawns = []

  const quad = (p, c0, c1) => { // p: 4 verts; c0 bottom colour, c1 top colour (arrays)
    const b = pos.length / 3
    for (let i = 0; i < 4; i++) { pos.push(...p[i]); col.push(...(i < 2 ? c0 : c1)) }
    idx.push(b, b + 1, b + 2, b, b + 2, b + 3)
  }
  const mul = (c, s) => [c[0] * s, c[1] * s, c[2] * s]

  function addBox(min, max, color, solid = true, noBottom = false) {
    const [x0, y0, z0] = min, [x1, y1, z1] = max
    const c = hex(color)
    const h = Math.max(0.01, y1 - y0)
    const low = (s) => mul(c, s * (h > 1.2 ? 0.72 : 0.9)) // baked AO gradient on tall faces
    const hi = (s) => mul(c, s)
    // +x, -x, +z, -z sides (CCW seen from outside), top, bottom
    quad([[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]], low(SHADE.x), hi(SHADE.x))
    quad([[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]], low(SHADE.x), hi(SHADE.x))
    quad([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], low(SHADE.z), hi(SHADE.z))
    quad([[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]], low(SHADE.z), hi(SHADE.z))
    const t = hi(SHADE.top)
    quad([[x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]], t, t)
    if (!noBottom) { const bt = hi(SHADE.bottom); quad([[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]], bt, bt) }
    if (solid) boxes.push({ min: [x0, y0, z0], max: [x1, y1, z1] })
  }
  const box = (cx, cz, w, d, y0, y1, color) =>
    addBox([cx - w / 2, y0, cz - d / 2], [cx + w / 2, y1, cz + d / 2], color)

  // Solid wedge. axis = direction of travel, dir = +1 rises toward +axis.
  function addRamp(x0, x1, z0, z1, y0, y1, axis, dir, color) {
    ramps.push({ x0, x1, z0, z1, y0, y1, axis, dir })
    const c = hex(color)
    // corners: A(x0,z0) B(x1,z0) C(x1,z1) D(x0,z1)
    const hAt = (x, z) => rampHeight({ x0, x1, z0, z1, y0, y1, axis, dir }, x, z)
    const P = (x, z) => [x, hAt(x, z), z]
    const A = P(x0, z0), B = P(x1, z0), C = P(x1, z1), D = P(x0, z1)
    const base = (p) => [p[0], 0, p[2]]
    quad([D, C, B, A], mul(c, 0.95), mul(c, 1.0)) // sloped top (normal up)
    const hiC = mul(c, 0.7), loC = mul(c, 0.5)
    quad([base(A), base(B), B, A], loC, hiC)
    quad([base(B), base(C), C, B], loC, hiC)
    quad([base(C), base(D), D, C], loC, hiC)
    quad([base(D), base(A), A, D], loC, hiC)
  }

  const FLOOR_A = '#2b3548', FLOOR_B = '#323d52'
  const S = 32 // half size of arena

  // Floor tiles (collision: one big box)
  boxes.push({ min: [-S - 2, -2, -S - 2], max: [S + 2, 0, S + 2] })
  const T = 4
  for (let i = -S; i < S; i += T) for (let j = -S; j < S; j += T) {
    const c = hex(((i + j) / T) % 2 === 0 ? FLOOR_A : FLOOR_B)
    quad([[i, 0, j + T], [i + T, 0, j + T], [i + T, 0, j], [i, 0, j]], c, c)
  }

  // Perimeter walls
  const WALL = '#46526b'
  addBox([-S - 1, 0, -S - 1], [S + 1, 9, -S], WALL)
  addBox([-S - 1, 0, S], [S + 1, 9, S + 1], WALL)
  addBox([-S - 1, 0, -S], [-S, 9, S], WALL)
  addBox([S, 0, -S], [S + 1, 9, S], WALL)

  // Central tower: deck at y=4.5 on pillars, ramps up from +x and -x sides
  const DECK = '#e0644a', PIL = '#8c3b2e'
  addBox([-6, 4.0, -6], [6, 4.5, 6], DECK)
  for (const [px, pz] of [[-5.5, -5.5], [5.5, -5.5], [-5.5, 5.5], [5.5, 5.5]]) box(px, pz, 1, 1, 0, 4, PIL)
  // low parapet pieces on deck for cover
  box(-3, 0, 0.6, 5, 4.5, 5.5, '#f08a6a')
  box(3, 0, 0.6, 5, 4.5, 5.5, '#f08a6a')
  addRamp(6, 16, -3, 3, 0, 4.5, 'x', -1, '#f2b84b')  // rises toward -x (towards the deck)
  addRamp(-16, -6, -3, 3, 0, 4.5, 'x', 1, '#f2b84b')

  // Side towers (cover + vertical level) in the north and south
  const BLU = '#4b8bd9', BLU2 = '#356bb0'
  addBox([-4, 0, 17], [4, 3, 24], BLU2)
  addBox([-4, 0, -24], [4, 3, -17], BLU2)
  addRamp(-4, 4, 11, 17, 0, 3, 'z', 1, BLU)    // rises toward +z into the north tower
  addRamp(-4, 4, -17, -11, 0, 3, 'z', -1, BLU)
  // upper catwalks along east/west walls at y=3
  const CAT = '#7e5bd6'
  addBox([-S, 2.6, -14], [-S + 4, 3, 14], CAT)
  addBox([S - 4, 2.6, -14], [S, 3, 14], CAT)
  for (const sx of [-1, 1]) for (const z of [-13.5, -4.5, 4.5, 13.5]) box(sx * (S - 3.5), z, 0.8, 0.8, 0, 2.6, '#4c3a8c')
  addRamp(-S + 4, -S + 12, 14, 18, 0, 3, 'x', -1, '#9b7be8') // rises toward -x to west catwalk (z 14..18 stub)
  addBox([-S, 2.6, 14], [-S + 4, 3, 18], CAT)
  addRamp(S - 12, S - 4, -18, -14, 0, 3, 'x', 1, '#9b7be8')
  addBox([S - 4, 2.6, -18], [S, 3, -14], CAT)

  // Crates & low walls (cover)
  const CR = ['#d9a441', '#c98a2e', '#5fb36b', '#3f9a8b']
  const crates = [
    [-12, -10, 2, 2, 1.6], [-13.5, -9, 1.2, 1.2, 1.0], [12, 10, 2, 2, 1.6], [13.5, 9, 1.2, 1.2, 1.0],
    [-10, 12, 3, 1, 1.4], [10, -12, 3, 1, 1.4], [-22, 0, 2, 4, 1.4], [22, 0, 2, 4, 1.4],
    [7, 14, 1.4, 1.4, 1.4], [-7, -14, 1.4, 1.4, 1.4], [-18, -22, 4, 1.2, 2.2], [18, 22, 4, 1.2, 2.2],
    [-18, 22, 1.2, 4, 2.2], [18, -22, 1.2, 4, 2.2], [-8, 0, 1.6, 1.6, 1.0], [8, 0.0, 1.6, 1.6, 1.0],
  ]
  crates.forEach(([x, z, w, d, h], i) => box(x, z, w, d, 0, h, CR[i % CR.length]))
  // stepped jump blocks near the middle edges
  box(-9, -22, 2, 2, 0, 1.0, '#e8e1d0'); box(-6.5, -22, 2, 2, 0, 2.0, '#e8e1d0'); box(-4, -22, 2, 2, 0, 3.0, '#e8e1d0')
  box(9, 22, 2, 2, 0, 1.0, '#e8e1d0'); box(6.5, 22, 2, 2, 0, 2.0, '#e8e1d0'); box(4, 22, 2, 2, 0, 3.0, '#e8e1d0')

  spawns.push([-26, 0, -26], [26, 0, 26], [-26, 0, 26], [26, 0, -26], [0, 4.6, 0], [0, 3.1, 20], [0, 3.1, -20], [-29, 3.1, 0])

  // Build merged mesh
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
  geo.setIndex(idx)
  geo.computeBoundingSphere()
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })
  const mesh = new THREE.Mesh(geo, mat)

  return { mesh, boxes, ramps, spawns, size: S }
}

export function rampHeight(r, x, z) {
  if (x < r.x0 || x > r.x1 || z < r.z0 || z > r.z1) return -Infinity
  const t = r.axis === 'x' ? (x - r.x0) / (r.x1 - r.x0) : (z - r.z0) / (r.z1 - r.z0)
  const u = r.dir > 0 ? t : 1 - t
  return r.y0 + (r.y1 - r.y0) * u
}

// Highest ramp surface under a point, or -Infinity.
export function groundRampHeight(ramps, x, z) {
  let h = -Infinity
  for (const r of ramps) { const v = rampHeight(r, x, z); if (v > h) h = v }
  return h
}
