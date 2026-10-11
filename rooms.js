// Peer-to-peer rooms that work in any Möbius and on the plain web.
//
// Players connect straight to each other over WebRTC data channels. To find
// each other they exchange a few small messages on a public ntfy.sh topic
// named after the room code: inside Möbius through its GET-only /api/proxy
// (an app frame may only talk to its own server), on the web directly. Only
// the handshake uses ntfy; game traffic never touches a server.
//
// The room contract matches what Net expects (the old window.mobius.live):
//   const room = join('bs-ABCD', { name, max })
//   room.onStatus(s)    'connecting' | 'open' | 'error' | 'closed', room.error
//   room.onPresence(list)  [{id, name}], host first
//   room.onMessage({from, data}); room.send(data, [ids]?); room.close()
//
// Whoever finds no live host on the topic becomes the host: it announces
// itself, answers each guest's offer, keeps the member list and forwards
// messages between guests. When the host leaves, the room ends.

const NTFY = 'https://ntfy.sh/'
const TOPIC_PREFIX = 'blockstrike-v2-'
const ICE = [
  { urls: ['stun:stun.l.google.com:19302', 'stun:global.stun.twilio.com:3478'] },
  // PeerJS's public relay, for networks where a direct path is impossible.
  { urls: ['turn:eu-0.turn.peerjs.com:3478', 'turn:us-0.turn.peerjs.com:3478'], username: 'peerjs', credential: 'peerjsp' },
]
const HOST_POLL_MS = 4000          // ntfy.sh allows ~1 request / 5 s sustained per IP
const GUEST_POLL_MS = 2500
const JOIN_TIMEOUT_MS = 25000
const ANNOUNCE_FRESH_S = 30 * 60   // a host announcement older than this is ignored

let proxyToken = null
export const setProxyToken = (t) => { proxyToken = t || null }
const standalone = (() => { try { return window.self === window.top } catch (e) { return false } })()

async function ntfyGet(path) {
  const url = NTFY + path
  const res = standalone
    ? await fetch(url)
    : await fetch('/api/proxy?url=' + encodeURIComponent(url), { headers: proxyToken ? { Authorization: 'Bearer ' + proxyToken } : {} })
  if (!res.ok) throw new Error('signal ' + res.status)
  return res.text()
}
const publish = (topic, obj) => ntfyGet(`${topic}/publish?message=${encodeURIComponent(JSON.stringify(obj))}`)
async function poll(topic, since) {
  const text = await ntfyGet(`${topic}/json?poll=1&since=${since}`)
  const out = []
  for (const line of text.split('\n')) {
    if (!line.trim()) continue
    try {
      const ev = JSON.parse(line)
      if (ev.event !== 'message') continue
      const body = JSON.parse(ev.message)
      if (body && typeof body === 'object') out.push({ id: ev.id, time: ev.time, body })
    } catch (e) {}
  }
  return out
}

// SDP with every candidate gathered, compressed so it fits one ntfy message.
const b64 = (bytes) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
const unb64 = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0))
async function pack(desc) {
  const sdp = desc.sdp.split('\r\n').filter((l) => !/^a=candidate:.* (\S+\.local) /.test(l) && !/^a=candidate:.* tcp /.test(l)).join('\r\n')
  if (typeof CompressionStream === 'undefined') return { y: desc.type, s: sdp }
  const buf = await new Response(new Blob([sdp]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer()
  return { y: desc.type, z: b64(new Uint8Array(buf)) }
}
async function unpack(p) {
  if (p.s) return { type: p.y, sdp: p.s }
  const stream = new Blob([unb64(p.z)]).stream().pipeThrough(new DecompressionStream('deflate-raw'))
  return { type: p.y, sdp: await new Response(stream).text() }
}
function gathered(pc, ms = 4000) {
  if (pc.iceGatheringState === 'complete') return Promise.resolve()
  return new Promise((resolve) => {
    const t = setTimeout(resolve, ms)
    pc.addEventListener('icegatheringstatechange', () => { if (pc.iceGatheringState === 'complete') { clearTimeout(t); resolve() } })
  })
}
const rid = () => Math.random().toString(36).slice(2, 10)

// One data channel wrapped as a tiny JSON connection.
function wrap(pc, ch) {
  const conn = { onData: null, onClose: null, open: () => ch.readyState === 'open' }
  let done = false
  const end = () => { if (done) return; done = true; try { pc.close() } catch (e) {} conn.onClose?.() }
  ch.onmessage = (e) => { let m; try { m = JSON.parse(e.data) } catch (x) { return } conn.onData?.(m) }
  ch.onclose = end
  pc.addEventListener('connectionstatechange', () => { if (['failed', 'closed'].includes(pc.connectionState)) end() })
  conn.send = (m) => { if (ch.readyState === 'open') ch.send(JSON.stringify(m)) }
  conn.close = end
  return conn
}

export function roomsAvailable() { return typeof RTCPeerConnection !== 'undefined' }

export function join(name, opts = {}) {
  const max = Math.max(2, opts.max | 0 || 8)
  const myName = String(opts.name || 'Player').slice(0, 24)
  const topic = TOPIC_PREFIX + String(name).replace(/[^A-Za-z0-9_-]/g, '')
  const handlers = { message: new Set(), presence: new Set(), status: new Set() }
  const room = { status: 'connecting', you: null, members: [], error: null }
  let closed = false, isHost = false, timer = null
  const guests = new Map()          // host: member id -> conn
  let pendingCount = 0              // host: offers answered but not yet joined
  let hostConn = null               // guest: conn to host
  const myPeer = rid()

  const emit = (set, v) => { for (const cb of [...set]) { try { cb(v) } catch (e) {} } }
  const setStatus = (status, error = null) => {
    if (room.status === status && room.error === error) return
    room.status = status; room.error = error
    emit(handlers.status, status)
  }
  const setMembers = (list) => { room.members = list; emit(handlers.presence, list) }
  const sub = (set) => (cb) => { if (typeof cb !== 'function') return () => {}; set.add(cb); return () => set.delete(cb) }
  const stopTimer = () => { clearTimeout(timer); timer = null }
  const fail = (error) => {
    if (closed) return
    stopTimer()
    try { hostConn?.close() } catch (e) {}
    setStatus('error', error)
  }

  // ---- host ------------------------------------------------------------
  const broadcastPresence = () => {
    for (const c of guests.values()) c.send({ t: 'presence', members: room.members })
    emit(handlers.presence, room.members)
  }
  const deliver = (from, data, to) => {
    const targets = Array.isArray(to) && to.length ? to : null
    for (const [id, c] of guests) if (id !== from && (!targets || targets.includes(id))) c.send({ t: 'msg', from, data })
    if (from !== room.you.id && (!targets || targets.includes(room.you.id))) emit(handlers.message, { from, data })
  }
  const answerOffer = async (body) => {
    if (room.members.length + pendingCount >= max) { publish(topic, { k: 'full', to: body.from }).catch(() => {}); return }
    pendingCount++
    const pc = new RTCPeerConnection({ iceServers: ICE })
    let settled = false
    const settle = () => { if (!settled) { settled = true; pendingCount-- } }
    setTimeout(settle, JOIN_TIMEOUT_MS)
    pc.ondatachannel = (e) => {
      const conn = wrap(pc, e.channel)
      let id = null
      conn.onData = (msg) => {
        if (msg.t === 'hello' && !id) {
          settle()
          if (room.members.length >= max) { conn.send({ t: 'full' }); setTimeout(conn.close, 300); return }
          id = body.from
          guests.set(id, conn)
          room.members = [...room.members, { id, name: String(msg.name || 'Player').slice(0, 24) }]
          conn.send({ t: 'welcome', you: room.members.at(-1), members: room.members })
          broadcastPresence()
        } else if (msg.t === 'send' && id) deliver(id, msg.data, msg.to)
        else if (msg.t === 'sync' && id) conn.send({ t: 'presence', members: room.members })
      }
      conn.onClose = () => {
        settle()
        if (!id || guests.get(id) !== conn) return
        guests.delete(id)
        room.members = room.members.filter((m) => m.id !== id)
        if (!closed) broadcastPresence()
      }
    }
    try {
      await pc.setRemoteDescription(await unpack(body.sdp))
      await pc.setLocalDescription(await pc.createAnswer())
      await gathered(pc)
      await publish(topic, { k: 'answer', to: body.from, sdp: await pack(pc.localDescription) })
    } catch (e) { settle(); try { pc.close() } catch (x) {} }
  }
  const seen = new Set()
  const hostLoop = async (since) => {
    if (closed) return
    let next = since
    try {
      for (const ev of await poll(topic, since)) {
        next = ev.id
        if (seen.has(ev.id)) continue
        seen.add(ev.id)
        if (ev.body.k === 'offer' && ev.body.host === myPeer) answerOffer(ev.body)
      }
    } catch (e) {}
    timer = setTimeout(() => hostLoop(next), HOST_POLL_MS)
  }
  const becomeHost = async (since) => {
    isHost = true
    room.you = { id: myPeer, name: myName }
    try { await publish(topic, { k: 'host', peer: myPeer, name: myName }) } catch (e) { fail('unavailable'); return }
    if (closed) return
    setStatus('open')
    setMembers([room.you])
    hostLoop(since)
  }

  // ---- guest -------------------------------------------------------------
  const joinHost = async (hostPeer, since) => {
    const pc = new RTCPeerConnection({ iceServers: ICE })
    const ch = pc.createDataChannel('room', { ordered: true })
    const conn = wrap(pc, ch)
    hostConn = conn
    const deadline = Date.now() + JOIN_TIMEOUT_MS
    conn.onData = (msg) => {
      if (msg.t === 'welcome') { stopTimer(); room.you = msg.you; setStatus('open'); setMembers(msg.members || []) }
      else if (msg.t === 'presence') setMembers(msg.members || [])
      else if (msg.t === 'msg') emit(handlers.message, { from: msg.from, data: msg.data })
      else if (msg.t === 'full') fail('full')
    }
    conn.onClose = () => { if (!closed && room.status !== 'error') fail(room.status === 'open' ? 'host-left' : 'unreachable') }
    ch.onopen = () => conn.send({ t: 'hello', name: myName })
    try {
      await pc.setLocalDescription(await pc.createOffer())
      await gathered(pc)
      await publish(topic, { k: 'offer', from: myPeer, host: hostPeer, sdp: await pack(pc.localDescription) })
    } catch (e) { fail('unavailable'); return }
    const wait = async (cursor) => {
      if (closed || room.status === 'open' || room.status === 'error') return
      if (Date.now() > deadline) { fail('unreachable'); return }
      let next = cursor
      try {
        for (const ev of await poll(topic, cursor)) {
          next = ev.id
          const b = ev.body
          if (b.to !== myPeer) continue
          if (b.k === 'full') { fail('full'); return }
          if (b.k === 'answer' && !pc.remoteDescription) await pc.setRemoteDescription(await unpack(b.sdp))
        }
      } catch (e) {}
      // Once the answer is in, the data channel opening (and 'welcome') ends the wait.
      timer = setTimeout(() => wait(next), GUEST_POLL_MS)
    }
    wait(since)
  }

  // ---- find a live host, or become one -------------------------------
  ;(async () => {
    let events
    try { events = await poll(topic, `${ANNOUNCE_FRESH_S}s`) } catch (e) { fail('unavailable'); return }
    if (closed) return
    const last = events.at(-1)?.id || `${ANNOUNCE_FRESH_S}s`
    const hosts = events.filter((e) => e.body.k === 'host')
    const ended = new Set(events.filter((e) => e.body.k === 'bye').map((e) => e.body.peer))
    const live = hosts.filter((e) => !ended.has(e.body.peer)).at(-1)
    if (live) joinHost(live.body.peer, last)
    else becomeHost(last)
  })()

  Object.assign(room, {
    onMessage: sub(handlers.message),
    onPresence: sub(handlers.presence),
    onStatus: sub(handlers.status),
    send(data, to) {
      if (room.status !== 'open') return false
      if (isHost) { deliver(room.you.id, data, to); return true }
      if (!hostConn?.open()) return false
      const frame = { t: 'send', data }
      if (Array.isArray(to) && to.length) frame.to = to
      hostConn.send(frame)
      return true
    },
    sync() {
      if (isHost) { emit(handlers.presence, room.members); return true }
      return !!hostConn?.open() && (hostConn.send({ t: 'sync' }), true)
    },
    close() {
      if (closed) return
      closed = true
      stopTimer()
      if (isHost) {
        publish(topic, { k: 'bye', peer: myPeer }).catch(() => {})
        for (const c of guests.values()) c.close()
        guests.clear()
      }
      hostConn?.close()
      room.you = null; room.members = []
      setStatus('closed')
    },
  })
  return room
}
