import React, { useEffect, useRef, useState } from 'react'

export const isTouchDevice = () =>
  typeof window !== 'undefined' && (window.matchMedia?.('(pointer: coarse)').matches || 'ontouchstart' in window)

const LOOK_GAIN = 1.5     // finger pixels -> mouse-like pixels
const RADIUS = 56

// Hold-style button: calls down()/up() on touch start/end.
function Btn({ cls, label, down, up, children }) {
  const [on, setOn] = useState(false)
  const id = useRef(null)
  return (
    <button className={`bs-tbtn ${cls || ''} ${on ? 'on' : ''}`} aria-label={label}
      onPointerDown={(e) => { e.preventDefault(); e.currentTarget.setPointerCapture(e.pointerId); id.current = e.pointerId; setOn(true); down() }}
      onPointerUp={() => { setOn(false); up?.() }}
      onPointerCancel={() => { setOn(false); up?.() }}
      onContextMenu={(e) => e.preventDefault()}>{children || label}</button>
  )
}

// Left thumb: floating joystick. Right thumb: drag anywhere to look.
// Fire/jump/etc. are buttons; the fire button also steers the view so you can
// aim and shoot with one thumb.
export function TouchControls({ game, onPause, crouchMode }) {
  const stick = useRef(null)    // {id, ox, oy}
  const look = useRef(new Map())
  const baseRef = useRef(null), knobRef = useRef(null)
  const crouchLatch = useRef(false)
  const [, force] = useState(0)
  const inp = game.input

  useEffect(() => () => { inp.setStick(0, 0) }, [inp])

  const moveStick = (e) => {
    const s = stick.current; if (!s || s.id !== e.pointerId) return
    let dx = e.clientX - s.ox, dy = e.clientY - s.oy
    const d = Math.hypot(dx, dy)
    if (d > RADIUS) { dx = dx / d * RADIUS; dy = dy / d * RADIUS }
    inp.setStick(dx / RADIUS, -dy / RADIUS)
    if (knobRef.current) knobRef.current.style.transform = `translate(${dx}px,${dy}px)`
  }
  const endStick = (e) => {
    if (!stick.current || stick.current.id !== e.pointerId) return
    stick.current = null; inp.setStick(0, 0)
    if (baseRef.current) baseRef.current.style.display = 'none'
  }
  const startStick = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    stick.current = { id: e.pointerId, ox: e.clientX, oy: e.clientY }
    const b = baseRef.current
    if (b) { b.style.display = 'block'; b.style.left = e.clientX + 'px'; b.style.top = e.clientY + 'px' }
    if (knobRef.current) knobRef.current.style.transform = 'translate(0,0)'
  }
  const lookStart = (e) => { e.currentTarget.setPointerCapture(e.pointerId); look.current.set(e.pointerId, [e.clientX, e.clientY]) }
  const lookMove = (e) => {
    const p = look.current.get(e.pointerId); if (!p) return
    inp.addLook((e.clientX - p[0]) * LOOK_GAIN, (e.clientY - p[1]) * LOOK_GAIN)
    p[0] = e.clientX; p[1] = e.clientY
  }
  const lookEnd = (e) => look.current.delete(e.pointerId)

  const key = (code) => ({ down: () => inp.pressKey(code), up: () => inp.releaseKey(code) })
  const crouchKey = 'KeyC'
  const toggleCrouch = () => { crouchLatch.current = !crouchLatch.current; crouchLatch.current ? inp.pressKey(crouchKey) : inp.releaseKey(crouchKey); force((n) => n + 1) }
  const tap = (code) => () => { inp.pressKey(code); setTimeout(() => inp.releaseKey(code), 60) }

  return (
    <div className="bs-touch" onContextMenu={(e) => e.preventDefault()}>
      <div className="bs-zone bs-zl" onPointerDown={startStick} onPointerMove={moveStick} onPointerUp={endStick} onPointerCancel={endStick} />
      <div className="bs-zone bs-zr" onPointerDown={lookStart} onPointerMove={lookMove} onPointerUp={lookEnd} onPointerCancel={lookEnd} />
      <div className="bs-stick" ref={baseRef} style={{ display: 'none' }}><i ref={knobRef} /></div>

      <button className="bs-tbtn bs-tpause" aria-label="Pause" onPointerDown={(e) => { e.preventDefault(); onPause() }}>II</button>

      <Btn cls="bs-ttab" label="TAB" {...key('Tab')} />
      <FireBtn inp={inp} lookStart={lookStart} lookMove={lookMove} lookEnd={lookEnd} />
      <Btn cls="bs-tjump" label="JUMP" {...key('Space')} />
      <Btn cls={`bs-tcrouch ${crouchLatch.current ? 'latched' : ''}`} label="CROUCH"
        down={() => { if (crouchMode === 'toggle') toggleCrouch(); else inp.pressKey(crouchKey) }}
        up={() => { if (crouchMode !== 'toggle') inp.releaseKey(crouchKey) }} />
      <Btn cls="bs-tscope" label="SCOPE" down={() => inp.pressMouse(2)} up={() => inp.releaseMouse(2)} />
      <Btn cls="bs-treload" label="R" down={tap('KeyR')} />
      <div className="bs-tweap">
        {[1, 2, 3].map((n) => <Btn key={n} cls="bs-tw" label={String(n)} down={tap('Digit' + n)} />)}
      </div>
    </div>
  )
}

function FireBtn({ inp, lookStart, lookMove, lookEnd }) {
  const [on, setOn] = useState(false)
  return (
    <button className={`bs-tbtn bs-tfire ${on ? 'on' : ''}`} aria-label="Fire"
      onPointerDown={(e) => { e.preventDefault(); lookStart(e); setOn(true); inp.pressMouse(0) }}
      onPointerMove={lookMove}
      onPointerUp={(e) => { lookEnd(e); setOn(false); inp.releaseMouse(0) }}
      onPointerCancel={(e) => { lookEnd(e); setOn(false); inp.releaseMouse(0) }}
      onContextMenu={(e) => e.preventDefault()}>FIRE</button>
  )
}
