export const DEFAULTS = { sensitivity: 1.0, fov: 100, volume: 0.7, scale: 1, difficulty: 'normal', name: '', crouchKey: 'c', scopeSens: 1.0, scopeMode: 'toggle', map: 'arena' }
const KEY = 'settings.json'
let timer = null

export async function loadSettings() {
  try {
    const s = await window.mobius?.storage?.get(KEY)
    return { ...DEFAULTS, ...(s || {}) }
  } catch (e) { return { ...DEFAULTS } }
}

export function saveSettings(s) {
  clearTimeout(timer)
  timer = setTimeout(() => { try { window.mobius?.storage?.set(KEY, s) } catch (e) {} }, 400)
}
