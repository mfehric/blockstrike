# Blockstrike

A fast, low-poly arena shooter for Möbius in the spirit of blocky browser FPS
games. Original game: all geometry is procedural, all sound is synthesized with
WebAudio, there are no downloaded models, textures or audio files, and Three.js
is the only runtime dependency (about 150 KB of source).

## Play

- **Move:** W A S D, jump with Space (hold to bunny-hop), crouch with Shift.
  Quake-style air strafing, speed-preserving hops and slide-hops (crouch on
  landing).
- **Weapons:** `1` assault rifle, `2` sniper (right-click scopes, one-shot
  headshot), `3` shotgun, `R` reload, `Tab` scoreboard.
- **Modes:** 4-minute free-for-all against 5 bots (Easy/Normal/Hard), or online
  rooms for 2-4 players with a 4-letter room code.

## Online play needs live rooms

Online rooms use `window.mobius.live`, a Möbius runtime capability for
low-latency room messaging. If the host Möbius does not provide it, the Online
button explains that it is unavailable and single-player is unaffected.
Hits are decided by the shooter's client and loosely validated by the victim's
client; the first player in a room is the host and owns the match clock.

## Layout

`config.js` (all movement constants) · `input` · `player` (AABB controller) ·
`map` · `game` (fixed 60 Hz loop, interpolated rendering) · `weapons` ·
`combat` · `effects` · `viewmodel` · `nav` + `bots` · `match` · `net` +
`online` · `audio` · `settings` · `hud`.

## License

MIT, see `LICENSE`.
