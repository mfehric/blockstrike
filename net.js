import { CONFIG as C } from './config.js'

// Room transport + protocol for online matches (window.mobius.live).
//
// Everyone simulates their own movement and broadcasts a compact state at
// 20 Hz; others render it ~110 ms in the past, interpolated. Shots are decided
// by the shooter's client: it sends the victim a `hit`, the victim validates it
// loosely (range, rate, line of sight) and applies the damage to itself. The
// first member of the room is the host and owns the match clock + scoreboard.

export const MAX_PLAYERS = 4
export const STATE_HZ = 20
const INTERP_MS = 110
const WEAPON_IDX = { ar: 0, sniper: 1, shotgun: 2 }
export const WEAPON_BY_IDX = ['ar', 'sniper', 'shotgun']
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

export const makeCode = () => Array.from({ length: 4 }, () => CODE_CHARS[(Math.random() * CODE_CHARS.length) | 0]).join('')
export const cleanCode = (s) => String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4)
export const liveAvailable = () => !!window.mobius?.live?.join

// The sandboxed frame cannot read the page address, but the browser passes the
// same-origin page URL as the frame's referrer. On the public page
// /blockstrike?room=ABCD that carries an invite; in the shell it gives the
// instance origin the invite link points at.
export const PUBLIC_PATH = '/blockstrike'
const pageUrl = () => { try { return document.referrer ? new URL(document.referrer) : null } catch (e) { return null } }
export const inviteCode = () => {
  const c = cleanCode(pageUrl()?.searchParams.get('room'))
  return c.length === 4 ? c : ''
}
export const inviteLink = (code) => {
  const u = pageUrl()
  return u ? `${u.origin}${PUBLIC_PATH}?room=${code}` : ''
}

// A remote player's recent states for interpolation.
export class RemoteTrack {
  constructor() { this.buf = []; this.last = null }
  push(s) {
    s.t = performance.now()
    this.buf.push(s); this.last = s
    if (this.buf.length > 24) this.buf.shift()
  }
  sample(now = performance.now()) {
    const b = this.buf
    if (!b.length) return null
    const t = now - INTERP_MS
    if (t <= b[0].t) return b[0]
    for (let i = b.length - 1; i > 0; i--) {
      if (b[i - 1].t <= t) {
        const a = b[i - 1], c = b[i], k = Math.min(1, (t - a.t) / Math.max(1, c.t - a.t))
        let dy = c.yaw - a.yaw
        dy = Math.atan2(Math.sin(dy), Math.cos(dy))
        return {
          x: a.x + (c.x - a.x) * k, y: a.y + (c.y - a.y) * k, z: a.z + (c.z - a.z) * k,
          yaw: a.yaw + dy * k, pitch: a.pitch + (c.pitch - a.pitch) * k, fl: c.fl, w: c.w, hp: c.hp,
        }
      }
    }
    return b[b.length - 1]
  }
}

export class Net {
  constructor({ code, name, onEvent }) {
    this.code = code
    this.name = name
    this.onEvent = onEvent          // (type, payload) => void
    this.room = null
    this.status = 'connecting'
    this.you = null
    this.members = []
    this.tracks = new Map()         // member id -> RemoteTrack
    this.names = new Map()
  }

  connect() {
    const live = window.mobius?.live
    if (!live?.join) { this.status = 'error'; this.error = 'unavailable'; this.onEvent('status', 'error'); return }
    const room = live.join(`bs-${this.code}`, { name: this.name, max: MAX_PLAYERS })
    this.room = room
    room.onStatus((s) => {
      this.status = s; this.error = room.error
      if (s === 'open') this.you = room.you
      this.onEvent('status', s)
    })
    room.onPresence((list) => {
      this.members = list
      for (const m of list) this.names.set(m.id, m.name)
      for (const id of [...this.tracks.keys()]) if (!list.some((m) => m.id === id)) this.tracks.delete(id)
      this.onEvent('presence', list)
    })
    room.onMessage(({ from, data }) => this.handle(from, data))
  }

  get id() { return this.you?.id || null }
  get hostId() { return this.members[0]?.id || null }
  get isHost() { return !!this.id && this.hostId === this.id }

  handle(from, d) {
    if (!d || typeof d !== 'object') return
    switch (d.k) {
      case 'st': {
        const a = d.s
        if (!Array.isArray(a) || a.length < 8) return
        let tr = this.tracks.get(from)
        if (!tr) { tr = new RemoteTrack(); this.tracks.set(from, tr) }
        tr.push({ x: a[0], y: a[1], z: a[2], yaw: a[3], pitch: a[4], fl: a[5] | 0, w: a[6] | 0, hp: a[7] })
        break
      }
      default: this.onEvent('msg', { from, d })
    }
  }

  send(d, to) { return this.room?.send(d, to) }

  sendState(p, alive, weapon, hp) {
    const fl = (p.crouched ? 1 : 0) | (p.sliding ? 2 : 0) | (alive ? 4 : 0)
    const r = (v) => Math.round(v * 100) / 100
    this.send({ k: 'st', s: [r(p.pos.x), r(p.pos.y), r(p.pos.z), r(p.yaw), r(p.pitch), fl, WEAPON_IDX[weapon] || 0, Math.round(hp)] })
  }

  close() { this.room?.close(); this.room = null }
}
