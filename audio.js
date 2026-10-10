// All sound is synthesised with WebAudio. No audio files.
let ctx = null, master = null, noiseBuf = null, slideNode = null
let volume = 0.7

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return }
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return
  ctx = new AC()
  master = ctx.createGain(); master.gain.value = volume; master.connect(ctx.destination)
  const len = ctx.sampleRate
  noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate)
  const d = noiseBuf.getChannelData(0)
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
}

export function setVolume(v) { volume = v; if (master) master.gain.value = v }

function noise(dur, type, f0, f1, gain, q = 0.8) {
  if (!ctx) return
  const t = ctx.currentTime
  const src = ctx.createBufferSource(); src.buffer = noiseBuf
  const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur)
  const g = ctx.createGain()
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + 0.008)
  g.gain.exponentialRampToValueAtTime(0.0008, t + dur)
  src.connect(f).connect(g).connect(master)
  src.start(t, Math.random() * 0.5, dur + 0.05)
}

function tone(f0, f1, dur, gain, type = 'sine') {
  if (!ctx) return
  const t = ctx.currentTime
  const o = ctx.createOscillator(); o.type = type
  o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur)
  const g = ctx.createGain()
  g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur)
  o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.02)
}

// stereo-panned one-shot helper
function panned(pan, gainNode) {
  if (!ctx || !ctx.createStereoPanner) return gainNode
  const p = ctx.createStereoPanner(); p.pan.value = pan; p.connect(gainNode); return p
}

export const sfx = {
  shot(kind, vol = 1, pan = 0) {
    if (!ctx) return
    const t = ctx.currentTime
    const out = ctx.createGain(); out.gain.value = vol; out.connect(master)
    const dest = panned(pan, out)
    const burst = (dur, type, f0, f1, g) => {
      const src = ctx.createBufferSource(); src.buffer = noiseBuf
      const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur)
      const gn = ctx.createGain(); gn.gain.setValueAtTime(g, t); gn.gain.exponentialRampToValueAtTime(0.001, t + dur)
      src.connect(f).connect(gn).connect(dest); src.start(t, Math.random() * 0.5, dur + 0.05)
    }
    const thump = (f0, f1, dur, g) => {
      const o = ctx.createOscillator(); o.type = 'sine'
      o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur)
      const gn = ctx.createGain(); gn.gain.setValueAtTime(g, t); gn.gain.exponentialRampToValueAtTime(0.001, t + dur)
      o.connect(gn).connect(dest); o.start(t); o.stop(t + dur + 0.02)
    }
    if (kind === 'ar') { burst(0.09, 'bandpass', 3200, 600, 0.55); thump(190, 60, 0.09, 0.5) }
    else if (kind === 'sniper') { burst(0.35, 'lowpass', 5000, 200, 0.9); burst(0.05, 'highpass', 2500, 2500, 0.6); thump(110, 35, 0.4, 0.9) }
    else { burst(0.22, 'lowpass', 3500, 250, 1.0); thump(130, 40, 0.2, 0.8) }
  },
  hit(head) { tone(head ? 1900 : 1100, head ? 1500 : 800, 0.07, head ? 0.22 : 0.15, 'square') },
  kill() { tone(700, 1400, 0.12, 0.2, 'triangle'); setTimeout(() => tone(1400, 1900, 0.14, 0.18, 'triangle'), 70) },
  reload() { noise(0.05, 'highpass', 3000, 3000, 0.15); setTimeout(() => tone(260, 180, 0.07, 0.2, 'square'), 450); setTimeout(() => noise(0.06, 'highpass', 2500, 2500, 0.2), 900) },
  empty() { tone(300, 250, 0.04, 0.12, 'square') },
  hurt() { tone(160, 80, 0.18, 0.4, 'sawtooth') },
  die() { tone(220, 40, 0.6, 0.4, 'sawtooth') },
  switchGun() { noise(0.05, 'bandpass', 1800, 900, 0.12) },

  jump() { noise(0.14, 'bandpass', 500, 1500, 0.16) },
  land(impact) {
    const k = Math.min(1, impact / 18)
    tone(120, 45, 0.16, 0.25 + 0.5 * k)
    noise(0.1, 'lowpass', 900, 200, 0.12 + 0.3 * k)
  },
  step() { noise(0.05, 'bandpass', 220, 120, 0.08, 1.5) },
  slideStart() { noise(0.25, 'bandpass', 2500, 700, 0.18, 1.2) },
  // continuous slide hiss; call with true/false
  slide(on, speed = 0) {
    if (!ctx) return
    if (on && !slideNode) {
      const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.7; f.frequency.value = 1200
      const g = ctx.createGain(); g.gain.value = 0
      src.connect(f).connect(g).connect(master); src.start()
      slideNode = { src, f, g }
    }
    if (slideNode) {
      const t = ctx.currentTime
      slideNode.g.gain.setTargetAtTime(on ? 0.05 + Math.min(0.12, speed * 0.008) : 0, t, 0.05)
      slideNode.f.frequency.setTargetAtTime(700 + speed * 80, t, 0.05)
      if (!on) { const n = slideNode; slideNode = null; setTimeout(() => { try { n.src.stop() } catch (e) {} }, 300) }
    }
  },
}
