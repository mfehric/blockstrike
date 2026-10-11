// Crouch key choices. Not Shift or Ctrl by default: tapping Shift five times
// opens Windows Sticky Keys, and Ctrl+W/Ctrl+D (crouch while moving) are
// browser shortcuts that close or leave the page.
export const CROUCH_KEYS = {
  c: ['KeyC'],
  shift: ['ShiftLeft', 'ShiftRight'],
  ctrl: ['ControlLeft', 'ControlRight'],
}

// Keyboard + mouse state. Look deltas are applied directly to the camera angles
// (outside the fixed step) so aiming never waits for a simulation tick.
export class Input {
  constructor(target) {
    this.keys = new Set()
    this.pressedEdge = new Set()   // codes pressed since last consume
    this.mouseButtons = 0
    this.lookX = 0
    this.lookY = 0
    this.enabled = false
    this.onKey = null
    this.crouchKeys = CROUCH_KEYS.c
    const kd = (e) => {
      if (!this.enabled) return
      if (!e.repeat) this.pressedEdge.add(e.code)
      this.keys.add(e.code)
      if (this.onKey) this.onKey(e)
      // While playing, game keys must not reach the browser: Ctrl+D, Ctrl+S,
      // Ctrl+F, Space, Tab... (Ctrl+W/T/N stay reserved by the browser, which
      // is why crouch is not on Ctrl by default.) Escape and F-keys pass.
      if (e.code !== 'Escape' && !/^F\d+$/.test(e.code)) e.preventDefault()
    }
    const ku = (e) => { this.keys.delete(e.code) }
    const mm = (e) => { if (this.enabled) { this.lookX += e.movementX; this.lookY += e.movementY } }
    const md = (e) => {
      if (!this.enabled) return
      this.mouseButtons |= 1 << e.button
      this.pressedEdge.add('Mouse' + e.button)
    }
    const mu = (e) => { this.mouseButtons &= ~(1 << e.button) }
    const blur = () => { this.keys.clear(); this.mouseButtons = 0 }
    window.addEventListener('keydown', kd)
    window.addEventListener('keyup', ku)
    window.addEventListener('mousemove', mm)
    window.addEventListener('mousedown', md)
    window.addEventListener('mouseup', mu)
    window.addEventListener('blur', blur)
    this.dispose = () => {
      window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku)
      window.removeEventListener('mousemove', mm); window.removeEventListener('mousedown', md)
      window.removeEventListener('mouseup', mu); window.removeEventListener('blur', blur)
    }
  }
  setCrouchKey(id) { this.crouchKeys = CROUCH_KEYS[id] || CROUCH_KEYS.c }
  setEnabled(v) { this.enabled = v; if (!v) { this.keys.clear(); this.mouseButtons = 0; this.lookX = this.lookY = 0 } }
  down(code) { return this.keys.has(code) }
  consumeLook() { const r = [this.lookX, this.lookY]; this.lookX = this.lookY = 0; return r }
  consumeEdge(code) { return this.pressedEdge.delete(code) }
  // Movement snapshot for one simulation tick.
  snapshot() {
    const k = this.keys
    return {
      fwd: (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0),
      strafe: (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0),
      jump: k.has('Space'),
      crouch: this.crouchKeys.some((c) => k.has(c)),
    }
  }
}
