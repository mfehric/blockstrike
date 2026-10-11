import React, { useEffect, useRef, useState } from 'react'
import { Game } from './game.js'
import { CONFIG } from './config.js'
import { initAudio, setVolume } from './audio.js'
import { loadSettings, saveSettings, DEFAULTS } from './settings.js'
import { Hud, MainMenu, PauseMenu, Results, OnlineMenu, Lobby } from './hud.jsx'
import { makeCode, cleanCode, liveAvailable, inviteCode } from './net.js'
import { setServiceAccess } from './rooms.js'
import { CSS, CSS2 } from './styles.js'

export default function App({ appId, token }) {
  setServiceAccess(appId, token)
  const canvasRef = useRef(null)
  const gameRef = useRef(null)
  const [game, setGame] = useState(null)
  const [settings, setSettings] = useState(DEFAULTS)
  // An invite link opens straight on the online screen with its code filled in;
  // the guest still taps JOIN, which also unlocks audio for the match.
  const [invite] = useState(() => inviteCode())
  const [phase, setPhase] = useState(invite ? 'online' : 'menu')        // menu | online | lobby | playing | results
  const [locked, setLocked] = useState(false)
  const [error, setError] = useState('')
  const [feed, setFeed] = useState([])
  const [ranking, setRanking] = useState([])
  const [online, setOnline] = useState(null)      // {code, status, error, members, youId, isHost} while in a room
  const onlineRef = useRef(null)
  onlineRef.current = online
  const settingsRef = useRef(settings)
  const phaseRef = useRef(phase)
  phaseRef.current = phase

  // Hide Möbius chrome while playing
  useEffect(() => {
    const post = (value) => window.parent.postMessage({ type: 'moebius:immersive', value, appId }, '*')
    post(true)
    return () => post(false)
  }, [appId])

  useEffect(() => {
    let cancelled = false, g = null
    const canvas = canvasRef.current
    loadSettings().then((s) => {
      if (cancelled) return
      settingsRef.current = s; setSettings(s); setVolume(s.volume)
      g = new Game(canvas, s)
      g.hooks = {
        onFeed: (f) => setFeed(f.slice(-5).map((e) => ({ ...e, at: performance.now() }))),
        onEnd: (r) => {
          setRanking(r.map((f) => ({ id: f.id, name: f.name, color: f.color, isPlayer: f.isPlayer, kills: f.kills, deaths: f.deaths })))
          g.setActive(false); setPhase('results')
          if (document.pointerLockElement) document.exitPointerLock()
        },
      }
      gameRef.current = g
      window.__blockstrike = { game: g, config: CONFIG } // tuning / test hook
      setGame(g)
    })
    const onLock = () => {
      const on = document.pointerLockElement === canvas
      setLocked(on)
      gameRef.current?.setActive(on && phaseRef.current === 'playing')
    }
    const onErr = () => setError('Mouse capture was blocked. Click again to retry.')
    const noCtx = (e) => e.preventDefault()
    document.addEventListener('pointerlockchange', onLock)
    document.addEventListener('pointerlockerror', onErr)
    canvas.addEventListener('contextmenu', noCtx)
    // old kill-feed entries expire
    const iv = setInterval(() => setFeed((f) => (f.length && f.some((e) => performance.now() - e.at > 6000) ? f.filter((e) => performance.now() - e.at < 6000) : f)), 1000)
    return () => {
      cancelled = true; clearInterval(iv)
      document.removeEventListener('pointerlockchange', onLock)
      document.removeEventListener('pointerlockerror', onErr)
      canvas.removeEventListener('contextmenu', noCtx)
      if (document.pointerLockElement === canvas) document.exitPointerLock()
      g?.dispose()
    }
  }, [])

  const change = (patch) => {
    const s = { ...settingsRef.current, ...patch }
    settingsRef.current = s; setSettings(s)
    gameRef.current?.applySettings(s)
    if (patch.volume !== undefined) setVolume(s.volume)
    saveSettings(s)
  }

  const lock = () => {
    setError('')
    initAudio(); setVolume(settingsRef.current.volume)
    const c = canvasRef.current
    try {
      const r = c.requestPointerLock({ unadjustedMovement: true })
      if (r && r.catch) r.catch(() => { try { c.requestPointerLock() } catch (e) {} })
    } catch (e) { c.requestPointerLock() }
  }

  const play = () => {
    const g = gameRef.current
    if (!g) return
    g.startMatch(settingsRef.current.difficulty)
    setFeed([]); phaseRef.current = 'playing'; setPhase('playing')
    lock()
  }
  const quit = () => {
    const g = gameRef.current
    g?.leaveOnline(); g?.match.stop(); g?.setActive(false)
    setOnline(null); setPhase('menu')
  }

  // ---- online rooms
  const syncOnline = (om) => setOnline((o) => o && ({
    ...o, status: om.net?.status || o.status, error: om.net?.error || null,
    members: om.net?.members || [], youId: om.net?.id || null, isHost: !!om.net?.isHost,
  }))
  const enterRoom = (code) => {
    const g = gameRef.current
    if (!g) return
    initAudio(); setVolume(settingsRef.current.volume)
    const name = (settingsRef.current.name || '').trim() || 'Player'
    setOnline({ code, status: 'connecting', error: null, members: [], youId: null, isHost: false })
    const om = g.startOnline(code, name)
    om.hooks = {
      onStatus: () => syncOnline(om),
      onPresence: () => syncOnline(om),
      onPhase: (p) => {
        syncOnline(om)
        if (p === 'running') { phaseRef.current = 'playing'; setPhase('playing') }
        else if (p === 'lobby' && phaseRef.current !== 'lobby') { phaseRef.current = 'lobby'; setPhase('lobby') }
      },
    }
    phaseRef.current = 'lobby'; setPhase('lobby')
  }
  const startOnlineMatch = () => {
    const om = gameRef.current?.onlineMatch
    if (!om) return
    om.startRound()
    lock()
  }
  const againOnline = () => {
    const om = gameRef.current?.onlineMatch
    om?.backToLobby()
    phaseRef.current = 'lobby'; setPhase('lobby')
  }

  return (
    <div className="bs-root">
      <style>{CSS + CSS2}</style>
      <canvas ref={canvasRef} className="bs-canvas" />
      {game && phase === 'playing' && <Hud game={game} feed={feed} />}
      {phase === 'menu' && <MainMenu settings={settings} onChange={change} onPlay={play} onOnline={() => setPhase('online')} error={error} />}
      {phase === 'online' && (
        <OnlineMenu name={settings.name || ''} onName={(v) => change({ name: v })} available={liveAvailable()} initialCode={invite} ready={!!game}
          onCreate={() => enterRoom(makeCode())} onJoin={(c) => enterRoom(cleanCode(c))} onBack={() => setPhase('menu')} />
      )}
      {phase === 'lobby' && online && (
        <Lobby code={online.code} status={online.status} error={online.error} members={online.members}
          isHost={online.isHost} youId={online.youId} onStart={startOnlineMatch} onLeave={quit} />
      )}
      {phase === 'playing' && !locked && <PauseMenu settings={settings} onChange={change} onResume={lock} onQuit={quit} error={error} online={!!online} />}
      {phase === 'results' && online && <Results ranking={ranking} onAgain={againOnline} onMenu={quit} againLabel="BACK TO LOBBY" menuLabel="Leave room" />}
      {phase === 'results' && !online && <Results ranking={ranking} onAgain={play} onMenu={() => setPhase('menu')} />}
    </div>
  )
}
