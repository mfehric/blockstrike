// All tunable movement constants live here (units: metres, seconds).
// The live object is also exposed as window.__blockstrike.config so it can be
// tweaked from the console while the game runs.
export const CONFIG = {
  tickRate: 60,

  // Player body
  halfWidth: 0.35,
  standHeight: 1.8,
  crouchHeight: 1.1,
  standEye: 1.62,
  crouchEye: 0.95,
  crouchLerp: 14,          // how fast the eye height eases (1/s)

  // Ground movement (Quake style)
  maxSpeed: 9.0,           // run speed (wish speed)
  crouchSpeedScale: 0.5,
  groundAccel: 11,         // multiplied by wishspeed*dt
  friction: 6.0,
  stopSpeed: 2.5,          // friction control floor, makes stopping crisp

  // Air movement (Quake style air strafing)
  airAccel: 90,
  airWishCap: 1.2,         // wishspeed is capped to this in the air: strafe gain
  gravity: 28,
  jumpSpeed: 8.8,
  autoBhop: true,          // holding jump re-jumps on the landing tick (no friction)
  maxFallSpeed: 40,
  maxHSpeed: 30,           // hard safety cap on horizontal speed

  // Slide / slide-hop
  slideMinSpeed: 7.0,      // need this much speed to start a slide
  slideEndSpeed: 3.2,      // slide ends below this
  slideFriction: 1.2,
  slideBoost: 2.4,         // m/s added when crouch is held on landing / slide start
  slideBoostCap: 15,     // boosts never push speed past this
  slideBoostCooldown: 0.5,
  slideSteer: 2.0,         // steering rate while sliding (rad-ish/s)

  // Ramps / ledges
  stepClimb: 0.55,         // walls lower than this on a ramp edge are walked up
  groundSnap: 0.6,         // stay glued to ramps going downhill

  // Camera feel
  baseFov: 100,
  fovSpeedKick: 7,         // extra degrees at full speed
  sensitivity: 1.0,        // multiplier on 0.0022 rad/px
  landDip: 0.045,          // camera dip per m/s of landing speed (clamped)
}
