// Weapon definitions + per-fighter ammo/reload/cooldown state.
function arPattern() {
  const p = []
  for (let i = 0; i < 40; i++) {
    const up = 0.0085 - Math.min(i, 20) * 0.00017
    const side = 0.0035 * Math.sin(i * 0.55) * (i < 6 ? 0.3 : 1) + (i > 14 ? 0.0012 * Math.sin(i * 1.9) : 0)
    p.push([up, side])
  }
  return p
}

export const WEAPONS = {
  ar: {
    id: 'ar', name: 'AR-9', slot: 1, auto: true, interval: 0.1, dmg: 18, headMult: 1.8,
    mag: 30, reserve: 120, reload: 1.7, pellets: 1, spread: 0.004, moveSpread: 0.014, range: 150,
    recoil: arPattern(), tracer: '#ffe7a0', tracerWidth: 0.025, tracerLife: 0.07, flash: 1.0,
  },
  sniper: {
    id: 'sniper', name: 'LONGBOW', slot: 2, auto: false, interval: 1.25, dmg: 75, headMult: 2.1, // head = 157 => one shot
    mag: 5, reserve: 15, reload: 2.3, pellets: 1, spread: 0.07, moveSpread: 0.02, range: 300,
    zooms: [40, 15], // right click: 2.5x, 6x, off
    zoomSpreads: [0.0012, 0.0003], recoil: [[0.035, 0.004]], tracer: '#9fe8ff', tracerWidth: 0.05, tracerLife: 0.18, flash: 1.5,
  },
  shotgun: {
    id: 'shotgun', name: 'BOOMSTICK', slot: 3, auto: false, interval: 0.8, dmg: 12, headMult: 1.5,
    mag: 6, reserve: 30, reload: 2.1, pellets: 9, spread: 0.05, moveSpread: 0.01, range: 60,
    falloff: { start: 7, end: 24, min: 0.25 }, recoil: [[0.03, 0.006]], tracer: '#ffd28a', tracerWidth: 0.018, tracerLife: 0.06, flash: 1.6,
  },
}
export const WEAPON_ORDER = ['ar', 'sniper', 'shotgun']

export class Loadout {
  constructor() { this.reset() }
  reset() {
    this.ammo = {}; this.reserve = {}
    for (const k in WEAPONS) { this.ammo[k] = WEAPONS[k].mag; this.reserve[k] = WEAPONS[k].reserve }
    this.cur = 'ar'; this.cd = 0; this.reloadT = 0; this.switchT = 0; this.shot = 0; this.idle = 0
  }
  get w() { return WEAPONS[this.cur] }
  select(id) {
    if (id === this.cur) return false
    this.cur = id; this.switchT = 0.28; this.reloadT = 0; this.shot = 0
    return true
  }
  reload() {
    const w = this.w
    if (this.reloadT > 0 || this.ammo[w.id] >= w.mag || this.reserve[w.id] <= 0) return false
    this.reloadT = w.reload
    return true
  }
  // returns true on the tick a reload completes
  update(dt) {
    this.cd = Math.max(0, this.cd - dt)
    this.switchT = Math.max(0, this.switchT - dt)
    this.idle += dt
    if (this.idle > 0.3) this.shot = 0
    if (this.reloadT > 0) {
      this.reloadT -= dt
      if (this.reloadT <= 0) {
        this.reloadT = 0
        const w = this.w, take = Math.min(w.mag - this.ammo[w.id], this.reserve[w.id])
        this.ammo[w.id] += take; this.reserve[w.id] -= take
        return true
      }
    }
    return false
  }
  canFire() { return this.cd <= 0 && this.switchT <= 0 && this.reloadT <= 0 && this.ammo[this.cur] > 0 }
  // consume one round; returns the shot index used for the recoil pattern
  consume() {
    this.ammo[this.cur]--; this.cd = this.w.interval; this.idle = 0
    return this.shot++
  }
}
