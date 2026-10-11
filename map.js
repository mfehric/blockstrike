import * as THREE from 'three'

// Procedural maps. Everything static is merged into ONE vertex-coloured mesh
// (one draw call). Collision uses axis-aligned boxes plus analytic wedge ramps.
// A map is a few lines of layout code, so new maps cost almost no download.

const SHADE = { top: 1.0, bottom: 0.45, x: 0.78, z: 0.62 }

function hex(c) { const k = new THREE.Color(c); return [k.r, k.g, k.b] }

// Shared geometry builder; each map's layout function draws with it.
function builder() {
  const pos = [], col = [], idx = []
  const boxes = []   // {min:[x,y,z], max:[x,y,z]}
  const ramps = []   // {x0,x1,z0,z1,y0,y1,axis:'x'|'z',dir:1|-1} height rises along +dir of axis

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
  // Solid block given by its x/z extents (for walls and building blocks).
  const rect = (x0, x1, z0, z1, h, color) => addBox([x0, 0, z0], [x1, h, z1], color)

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

  // Checkered floor (collision: one big box) and a closed perimeter wall.
  function arena(S, floorA, floorB, wall, wallH = 9) {
    boxes.push({ min: [-S - 2, -2, -S - 2], max: [S + 2, 0, S + 2] })
    const T = 4
    for (let i = -S; i < S; i += T) for (let j = -S; j < S; j += T) {
      const c = hex(((i + j) / T) % 2 === 0 ? floorA : floorB)
      quad([[i, 0, j + T], [i + T, 0, j + T], [i + T, 0, j], [i, 0, j]], c, c)
    }
    addBox([-S - 1, 0, -S - 1], [S + 1, wallH, -S], wall)
    addBox([-S - 1, 0, S], [S + 1, wallH, S + 1], wall)
    addBox([-S - 1, 0, -S], [-S, wallH, S], wall)
    addBox([S, 0, -S], [S + 1, wallH, S], wall)
  }

  function finish(extra) {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
    geo.setIndex(idx)
    geo.computeBoundingSphere()
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })
    return { mesh: new THREE.Mesh(geo, mat), boxes, ramps, ...extra }
  }

  return { box, rect, addBox, addRamp, arena, finish }
}

// ---- Arena: the original map --------------------------------------------------
function arenaMap() {
  const { box, addBox, addRamp, arena, finish } = builder()
  const S = 32 // half size of arena
  arena(S, '#2b3548', '#323d52', '#46526b')

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

  const spawns = [[-26, 0, -26], [26, 0, 26], [-26, 0, 26], [26, 0, -26], [0, 4.6, 0], [0, 3.1, 20], [0, 3.1, -20], [-29, 3.1, 0]]
  return finish({ spawns, size: S })
}

// ---- Dunes: three lanes in the spirit of classic desert bomb maps -----------
// North: two sites (A west on a raised platform, B east). South: the open
// spawn yard. Between them: a long west lane, a straight mid made for
// snipers, and narrow east tunnels. Doors join long and mid; a short
// connector joins mid and the tunnels. Gaps sit on the bots' 4 m nav grid.
function dunesMap() {
  const { box, rect, addRamp, arena, finish } = builder()
  const S = 36
  arena(S, '#cfae74', '#c6a46a', '#a7834f', 10)
  const BLD = '#d9bb85', BLD2 = '#c9a774', TRIM = '#8f6b3e'
  const CR = ['#a8763c', '#8a5d2c', '#6f8f5a', '#5f7f8f']

  // Building blocks between the lanes (taller than anyone can jump).
  rect(-22, -4, -14, -5, 7, BLD)       // west block, north part
  rect(-22, -4, 1, 14, 7, BLD2)        // west block, south part (gap z -5..1 = long doors)
  rect(-14, -12, -5, -4, 7, TRIM)      // door frame: 4 m doorway
  rect(-14, -12, 0, 1, 7, TRIM)
  rect(4, 22, -14, 4, 7, BLD2)         // east block (gap z 4..9 = connector to tunnels)
  rect(4, 22, 9, 14, 7, BLD)
  rect(-10, 10, 19, 25, 6, BLD)        // south spawn building, splits the yard
  rect(-36, -30, 14, 20, 6, BLD2)      // corners that shape the lane mouths
  rect(30, 36, 14, 20, 6, BLD2)
  rect(-4, 4, -36, -30, 5, BLD2)       // back wall between the two sites

  // Tunnels: the east lane narrowed by inner walls.
  rect(22, 24, -10, 0, 4, TRIM)
  rect(22, 24, 9, 14, 4, TRIM)

  // A site: raised platform in the north-west with a ramp from the south.
  rect(-32, -18, -34, -26, 3, '#b98c55')
  addRamp(-29, -23, -26, -18, 0, 3, 'z', -1, '#e0b878')   // rises toward -z onto the platform
  box(-22, -31, 1.6, 1.6, 3, 4.4, CR[0]); box(-29, -29, 2.2, 2.2, 3, 4.6, CR[1])
  box(-14, -24, 2.4, 2.4, 0, 1.8, CR[2]); box(-12.6, -22.6, 1.2, 1.2, 0, 1.0, CR[0])

  // B site: crates with jump steps up to a perch.
  box(26, -28, 4, 4, 0, 2.6, CR[3]); box(23, -28, 1.6, 1.6, 0, 1.3, CR[0])
  box(14, -26, 2, 2, 0, 1.6, CR[1]); box(31, -20, 2.4, 1.4, 0, 1.4, CR[2])
  box(10, -32, 2, 2, 0, 2.2, CR[0])

  // Mid: one side cover, long open sightline.
  box(-2.25, -8, 3.5, 1, 0, 1.6, CR[1])
  box(2, 10, 1.6, 1.6, 0, 1.2, CR[0])

  // Long: crates along the way.
  box(-30, 4, 2.4, 2.4, 0, 1.8, CR[0]); box(-26, -10, 1.6, 3, 0, 1.4, CR[2])
  box(-33, -12, 2, 2, 0, 2.2, CR[1])

  // Tunnels and the south yard.
  box(30, 6, 2, 2, 0, 1.6, CR[2]); box(33, -6, 1.6, 1.6, 0, 1.2, CR[0])
  box(-20, 28, 3, 1.2, 0, 1.4, CR[3]); box(20, 28, 3, 1.2, 0, 1.4, CR[3])
  box(-16, 18, 1.6, 1.6, 0, 1.2, CR[0]); box(16, 18, 1.6, 1.6, 0, 1.2, CR[1])

  const spawns = [[-30, 0, 30], [30, 0, 30], [0, 0, 32], [-26, 3.1, -30], [30, 0, -32], [0, 0, -26], [-30, 0, 0], [30, 0, 2]]
  return finish({ spawns, size: S, sky: '#f1d6a8', fog: [60, 150] })
}

// ---- Yard: small, fast close-quarters ------------------------------------------
function yardMap() {
  const { box, addBox, addRamp, arena, finish } = builder()
  const S = 22
  arena(S, '#3a4a3c', '#415244', '#5a5f55', 7)
  const CON = ['#c0453a', '#2f6fb0', '#d39a2c', '#3c8a5a']

  // Centre deck at y=3 you can walk under, ramps from north and south.
  addBox([-6, 2.6, -6], [6, 3, 6], '#9aa3a8')
  for (const [px, pz] of [[-5.5, -5.5], [5.5, -5.5], [-5.5, 5.5], [5.5, 5.5]]) box(px, pz, 1, 1, 0, 2.6, '#5d666b')
  box(0, -3, 4, 0.6, 3, 4, '#c3ccd1')                 // cover on the deck
  addRamp(-3, 3, 6, 13, 0, 3, 'z', -1, '#e0a13a')     // rises toward -z onto the deck
  addRamp(-3, 3, -13, -6, 0, 3, 'z', 1, '#e0a13a')

  // Shipping containers.
  const containers = [
    [-15, -12, 6, 2.4], [15, 12, 6, 2.4], [-12, 15, 2.4, 6], [12, -15, 2.4, 6], [-16, 4, 2.4, 5], [16, -4, 2.4, 5],
  ]
  containers.forEach(([x, z, w, d], i) => box(x, z, w, d, 0, 2.6, CON[i % CON.length]))
  box(10.3, 12, 1.4, 1.4, 0, 1.3, '#b9b2a0'); box(-10.3, -12, 1.4, 1.4, 0, 1.3, '#b9b2a0')   // steps onto two of them

  // Low walls.
  box(0, -17, 6, 0.8, 0, 1.2, '#8b8f86'); box(0, 17, 6, 0.8, 0, 1.2, '#8b8f86')
  box(-9, 0, 0.8, 4, 0, 1.2, '#8b8f86'); box(9, 0, 0.8, 4, 0, 1.2, '#8b8f86')

  const spawns = [[-19, 0, -19], [19, 0, 19], [-19, 0, 19], [19, 0, -19], [0, 3.1, 0], [0, 0, -20], [0, 0, 20], [-20, 0, 0], [20, 0, 0]]
  return finish({ spawns, size: S, sky: '#b9cfe0', fog: [35, 90] })
}

export const MAPS = [
  { id: 'arena', name: 'Arena', build: arenaMap },
  { id: 'dunes', name: 'Dunes', build: dunesMap },
  { id: 'yard', name: 'Yard', build: yardMap },
]
export const mapById = (id) => MAPS.find((m) => m.id === id) || MAPS[0]

export function buildMap(id = 'arena') {
  const def = mapById(id)
  return { id: def.id, name: def.name, sky: '#9fc4e8', fog: [45, 120], ...def.build() }
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
