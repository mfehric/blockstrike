import React, { useEffect, useRef } from 'react'
import { WEAPONS } from './weapons.js'
import { MATCH_SECONDS } from './match.js'
import { inviteLink } from './net.js'
import * as THREE from 'three'

const fmtTime = (t) => { const s = Math.max(0, Math.ceil(t)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0') }
const _v = new THREE.Vector3()

// Everything per-frame is written straight to the DOM (no React re-render).
export function Hud({ game, feed }) {
  const r = useRef({}), dnPool = useRef([])
  const ref = (k) => (el) => { r.current[k] = el }

  useEffect(() => {
    let n = 0, sbT = 0
    game.onFrame = (g) => {
      n++
      const m = g.match, me = m.player, R = r.current
      if (!me) return
      const p = g.player
      // hit marker
      const hm = g.hitMarker
      if (R.hm) { R.hm.style.opacity = hm.t > 0 ? Math.min(1, hm.t / 0.12) : 0; const hc = 'bs-hm ' + (hm.t > 0 ? hm.kind : ''); if (R.hm.className !== hc) R.hm.className = hc }
      // damage numbers
      const W = g.cssW, H = g.cssH
      const pool = dnPool.current
      for (let i = 0; i < 14; i++) {
        let el = pool[i]
        if (!el) { el = document.createElement('div'); el.className = 'bs-dn'; R.dn.appendChild(el); pool[i] = el }
        const d = g.dmgNums[i]
        if (!d) { if (el.style.display !== 'none') el.style.display = 'none'; continue }
        _v.copy(d.pos); _v.y += (1 - d.life / d.max) * 0.8 + 0.2
        _v.project(g.camera)
        if (_v.z > 1) { el.style.display = 'none'; continue }
        el.style.display = 'block'
        const cn = 'bs-dn' + (d.head ? ' head' : ''); if (el.className !== cn) el.className = cn
        el.textContent = d.text + (d.kill ? ' ✕' : '')
        el.style.opacity = Math.min(1, d.life / 0.35)
        el.style.transform = `translate(${((_v.x + 1) / 2) * W - 10}px, ${((1 - _v.y) / 2) * H}px)`
      }
      if (R.scope) { const sc = 'bs-scope' + (g.scoped ? ' on' : ''); if (R.scope.className !== sc) R.scope.className = sc }
      if (R.cross) R.cross.style.display = g.scoped || !me.alive ? 'none' : 'block'
      if (R.hurt) R.hurt.style.opacity = Math.min(0.9, g.hurt.t) * (me.alive ? 1 : 0.4)
      if (R.hdir) { R.hdir.style.opacity = Math.min(1, g.hurt.t * 1.4); R.hdir.style.transform = `rotate(${(-g.hurt.angle * 180) / Math.PI}deg)` }
      if (n % 3) return
      const s = p.hSpeed
      R.spd.textContent = s.toFixed(1)
      R.bar.style.width = Math.min(100, (s / 18) * 100) + '%'
      R.chip.textContent = !me.alive ? '' : p.sliding ? 'SLIDE' : !p.onGround ? 'AIR' : p.crouched ? 'CROUCH' : s > 0.5 ? 'RUN' : 'IDLE'
      R.fps.textContent = g.fps + ' fps'
      R.hpn.textContent = Math.ceil(me.hp)
      R.hpb.style.width = Math.max(0, me.hp) + '%'
      const L = me.loadout, w = L.w
      R.mag.textContent = L.ammo[w.id]
      R.res.textContent = '/ ' + L.reserve[w.id]
      R.wn.textContent = w.name
      R.rl.textContent = L.reloadT > 0 ? 'RELOADING…' : L.ammo[w.id] === 0 && L.reserve[w.id] === 0 ? 'NO AMMO' : L.ammo[w.id] === 0 ? 'PRESS R' : ''
      R.slots.children[0].className = L.cur === 'ar' ? 'on' : ''
      R.slots.children[1].className = L.cur === 'sniper' ? 'on' : ''
      R.slots.children[2].className = L.cur === 'shotgun' ? 'on' : ''
      R.time.textContent = fmtTime(m.time)
      const rank = m.ranking(), top = rank[0]
      R.score.textContent = `YOU ${me.kills} · ${top === me ? 'LEAD' : top.name + ' ' + top.kills}`
      if (R.dead) {
        R.dead.style.display = me.alive ? 'none' : 'block'
        if (!me.alive) R.deadt.textContent = 'Respawning in ' + Math.max(0, Math.ceil(me.respawnAt - m.clock))
      }
      // scoreboard while Tab is held
      const show = g.input.down('Tab')
      R.sb.className = 'bs-sb' + (show ? ' on' : '')
      if (show && (sbT -= 1) <= 0) {
        sbT = 8
        R.sbody.innerHTML = rank.map((f) => `<tr class="${f.isPlayer ? 'me' : ''}"><td><span class="bs-dot" style="background:${f.color}"></span>${f.name}</td><td>${f.kills}</td><td>${f.deaths}</td></tr>`).join('')
      }
    }
    return () => { game.onFrame = null }
  }, [game])

  return (
    <>
      <div className="bs-scope" ref={ref('scope')} />
      <div className="bs-hurt" ref={ref('hurt')} />
      <div className="bs-hdir" ref={ref('hdir')}><i /></div>
      <div className="bs-cross" ref={ref('cross')}><i /><i /><i /><i /></div>
      <div className="bs-hm" ref={ref('hm')}><i /><i /><i /><i /></div>
      <div ref={ref('dn')} />
      <div className="bs-top"><b ref={ref('time')}>{fmtTime(MATCH_SECONDS)}</b><div ref={ref('score')} /></div>
      <div className="bs-feed">
        {feed.map((e, i) => (
          <div key={e.t + e.victim + i} className={e.mine ? 'mine' : e.died ? 'died' : ''}>
            <span style={{ color: e.color }}>{e.killer || '—'}</span><em>{(WEAPONS[e.weapon]?.name || '') + (e.head ? ' ◆' : '')}</em><span style={{ color: e.vcolor }}>{e.victim}</span>
          </div>
        ))}
      </div>
      <div className="bs-hp"><b ref={ref('hpn')}>100</b><div className="bs-bar"><div ref={ref('hpb')} style={{ width: '100%' }} /></div></div>
      <div className="bs-ammo">
        <div className="bs-wname" ref={ref('wn')} />
        <b ref={ref('mag')}>30</b><span ref={ref('res')} />
        <div className="bs-reload" ref={ref('rl')} />
        <div className="bs-slots" ref={ref('slots')}><i>1</i><i>2</i><i>3</i></div>
      </div>
      <div className="bs-speed" style={{ bottom: 'max(20px,var(--mobius-safe-bottom,0px))', width: 150 }}>
        <b ref={ref('spd')} style={{ fontSize: 22 }}>0.0</b><small>m/s</small>
        <div className="bs-bar"><div ref={ref('bar')} /></div>
        <span className="bs-chip" ref={ref('chip')} />
      </div>
      <div className="bs-fps" ref={ref('fps')} />
      <div className="bs-dead" ref={ref('dead')}><b>ELIMINATED</b><span ref={ref('deadt')} /></div>
      <div className="bs-sb" ref={ref('sb')}>
        <div className="bs-table"><h3>SCOREBOARD</h3>
          <table><thead><tr><th>PLAYER</th><th>KILLS</th><th>DEATHS</th></tr></thead><tbody ref={ref('sbody')} /></table>
        </div>
      </div>
    </>
  )
}

function Slider({ label, value, min, max, step, onChange, fmt = (v) => v }) {
  return (
    <label className="bs-row">
      <span>{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} />
      <output>{fmt(value)}</output>
    </label>
  )
}

function Settings({ settings, onChange, showDifficulty }) {
  return (
    <>
      {showDifficulty && (
        <div className="bs-seg" role="group" aria-label="Bot difficulty">
          {['easy', 'normal', 'hard'].map((d) => (
            <button key={d} className={settings.difficulty === d ? 'on' : ''} onClick={() => onChange({ difficulty: d })}>{d.toUpperCase()}</button>
          ))}
        </div>
      )}
      <Slider label="Sensitivity" value={settings.sensitivity} min={0.2} max={3} step={0.05} onChange={(v) => onChange({ sensitivity: v })} fmt={(v) => v.toFixed(2)} />
      <Slider label="Field of view" value={settings.fov} min={70} max={120} step={1} onChange={(v) => onChange({ fov: v })} fmt={(v) => v + '°'} />
      <Slider label="Render scale" value={settings.scale} min={0.5} max={1} step={0.05} onChange={(v) => onChange({ scale: v })} fmt={(v) => Math.round(v * 100) + '%'} />
      <Slider label="Volume" value={settings.volume} min={0} max={1} step={0.05} onChange={(v) => onChange({ volume: v })} fmt={(v) => Math.round(v * 100) + '%'} />
    </>
  )
}

const Keys = () => (
  <div className="bs-keys">
    <kbd>W A S D</kbd><span>Move · strafe-turn in the air to gain speed</span>
    <kbd>Space</kbd><span>Jump · hold to bunny-hop</span>
    <kbd>Shift</kbd><span>Crouch · slide while running · land crouched = slide-hop</span>
    <kbd>Mouse</kbd><span>Left fire · Right scope (sniper)</span>
    <kbd>1 2 3 R</kbd><span>AR · Sniper · Shotgun · Reload</span>
    <kbd>Tab</kbd><span>Scoreboard</span>
  </div>
)

export function MainMenu({ settings, onChange, onPlay, onOnline, error }) {
  return (
    <div className="bs-menu">
      <div className="bs-card">
        <h1 className="bs-title">BLOCK<span>STRIKE</span></h1>
        <p className="bs-sub">4-minute free-for-all</p>
        <button className="bs-play" onClick={onPlay} autoFocus>PLAY VS 5 BOTS</button>
        <button className="bs-ghost" onClick={onOnline}>Play online with friends</button>
        {error && <p className="bs-note">{error}</p>}
        <Settings settings={settings} onChange={onChange} showDifficulty />
        <Keys />
      </div>
    </div>
  )
}

export function PauseMenu({ settings, onChange, onResume, onQuit, error, online }) {
  return (
    <div className="bs-menu">
      <div className="bs-card">
        <h1 className="bs-title">{online ? 'ONLINE MATCH' : 'PAUSED'}</h1>
        <p className="bs-sub">{online ? 'The match keeps running while you are here.' : 'The match is on hold.'}</p>
        <button className="bs-play" onClick={onResume} autoFocus>{online ? 'CLICK TO JUMP IN' : 'RESUME'}</button>
        {error && <p className="bs-note">{error}</p>}
        <button className="bs-ghost" onClick={onQuit}>{online ? 'Leave room' : 'Quit to main menu'}</button>
        <Settings settings={settings} onChange={onChange} />
      </div>
    </div>
  )
}

export function Results({ ranking, onAgain, onMenu, againLabel = 'PLAY AGAIN', menuLabel = 'Main menu' }) {
  const me = ranking.findIndex((f) => f.isPlayer)
  return (
    <div className="bs-menu">
      <div className="bs-card">
        <h1 className="bs-title">{me === 0 ? <>VICT<span>ORY</span></> : <>MATCH <span>OVER</span></>}</h1>
        <p className="bs-win">{me === 0 ? 'You topped the scoreboard.' : `You finished #${me + 1} of ${ranking.length}.`}</p>
        <div className="bs-table" style={{ width: '100%', padding: 0, border: 0 }}>
          <table><thead><tr><th>#</th><th>PLAYER</th><th>KILLS</th><th>DEATHS</th></tr></thead>
            <tbody>{ranking.map((f, i) => (
              <tr key={f.id} className={f.isPlayer ? 'me' : ''}><td style={{ textAlign: 'left', opacity: 0.6 }}>{i + 1}</td><td style={{ textAlign: 'left' }}><span className="bs-dot" style={{ background: f.color }} />{f.name}</td><td>{f.kills}</td><td>{f.deaths}</td></tr>
            ))}</tbody></table>
        </div>
        <button className="bs-play" style={{ marginTop: 16 }} onClick={onAgain} autoFocus>{againLabel}</button>
        <button className="bs-ghost" onClick={onMenu}>{menuLabel}</button>
      </div>
    </div>
  )
}

const STATUS_TEXT = {
  connecting: 'Connecting…',
  open: 'Connected',
  closed: 'Disconnected',
  error: 'Could not connect',
}

// Create or join a room by its 4-letter code.
export function OnlineMenu({ name, onName, onCreate, onJoin, onBack, available, initialCode = '', ready = true }) {
  const [code, setCode] = React.useState(initialCode)
  const clean = code.toUpperCase().slice(0, 4)
  return (
    <div className="bs-menu">
      <div className="bs-card">
        <h1 className="bs-title">PLAY <span>ONLINE</span></h1>
        <p className="bs-sub">{initialCode ? `You're invited to room ${initialCode}. Pick a name and join.` : 'Up to 4 players. Friends can join from their own Möbius or straight from the invite link in a browser.'}</p>
        {!available && <p className="bs-note">This browser cannot open online rooms.</p>}
        <label className="bs-row" style={{ gridTemplateColumns: '70px 1fr' }}>
          <span>Name</span>
          <input className="bs-text" value={name} maxLength={16} placeholder="Player" onChange={(e) => onName(e.target.value)} />
        </label>
        <button className="bs-play" style={{ marginTop: 16 }} disabled={!available || !ready} onClick={onCreate}>CREATE ROOM</button>
        <label className="bs-row" style={{ gridTemplateColumns: '70px 1fr 90px' }}>
          <span>Room code</span>
          <input className="bs-text bs-code" value={code} maxLength={8} placeholder="ABCD" inputMode="text"
            autoCapitalize="characters" autoCorrect="off" autoComplete="off" spellCheck={false}
            aria-label="Room code"
            onChange={(e) => setCode(e.target.value.replace(/[^A-Za-z0-9]/g, ''))}
            onKeyDown={(e) => { if (e.key === 'Enter' && ready && clean.length >= 4) onJoin(clean) }} />
          <button className="bs-seg-btn" disabled={!available || !ready || clean.length < 4} onClick={() => onJoin(clean)}>JOIN</button>
        </label>
        <button className="bs-ghost" onClick={onBack}>Back</button>
      </div>
    </div>
  )
}

export function Lobby({ code, status, error, members, isHost, youId, onStart, onLeave }) {
  const [copied, setCopied] = React.useState('')
  const [slow, setSlow] = React.useState(false)
  React.useEffect(() => {
    if (status === 'open') { setSlow(false); return undefined }
    const t = setTimeout(() => setSlow(true), 8000)
    return () => clearTimeout(t)
  }, [status])
  // The app frame is sandboxed, so navigator.clipboard is usually denied there;
  // the runtime's clipboard tries in-frame copy, then the trusted host.
  const link = inviteLink(code)
  const copy = async () => {
    const text = link || code
    let ok = false
    try {
      ok = window.mobius?.clipboard?.writeText
        ? await window.mobius.clipboard.writeText(text)
        : (await navigator.clipboard.writeText(text), true)
    } catch (e) { ok = false }
    setCopied(ok ? 'ok' : 'fail')
    setTimeout(() => setCopied(''), ok ? 1500 : 6000)
  }
  const ready = status === 'open'
  const msg = error === 'full' ? 'This room is full (4 players).' : error === 'host-left' ? 'The host left, so the room closed.' : error === 'unreachable' ? 'Could not reach this room. Check the code, or ask the host to create it again.' : error === 'unavailable' ? 'Could not reach the room service. Check your connection and try again.' : error === 'unauthorized' ? 'Could not sign in to the room.' : slow && status !== 'open' ? 'Still cannot reach the room server. Check your connection, or leave and try again.' : STATUS_TEXT[status] || ''
  return (
    <div className="bs-menu">
      <div className="bs-card">
        <h1 className="bs-title">ROOM <span>{code}</span></h1>
        <p className="bs-sub">{ready ? (link ? 'Send friends the invite link. The host starts the match.' : 'Share this code. The host starts the match.') : msg}</p>
        <button className="bs-ghost" style={{ marginTop: 0 }} onClick={copy}>{copied === 'ok' ? 'Copied' : link ? 'Copy invite link' : 'Copy room code'}</button>
        {copied === 'fail' && <p className="bs-note" style={{ userSelect: 'all', wordBreak: 'break-all' }}>Copy was blocked. Select and copy: {link || code}</p>}
        <ul className="bs-players">
          {members.map((m, i) => (
            <li key={m.id}><span className="bs-dot" style={{ background: ['#e0644a', '#4b8bd9', '#5fb36b', '#d9a441'][i % 4] }} />{m.name}{m.id === youId ? ' (you)' : ''}{i === 0 ? ' · host' : ''}</li>
          ))}
          {!members.length && <li style={{ opacity: 0.6 }}>{msg || 'Waiting…'}</li>}
        </ul>
        {isHost
          ? <button className="bs-play" onClick={onStart} disabled={!ready}>START MATCH ({members.length} {members.length === 1 ? 'player' : 'players'})</button>
          : <p className="bs-note">{ready ? 'Waiting for the host to start…' : ''}</p>}
        <button className="bs-ghost" onClick={onLeave}>Leave room</button>
      </div>
    </div>
  )
}
