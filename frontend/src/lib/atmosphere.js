/**
 * Deterministic ambient particles — stars for the sky, motes for the earth.
 *
 * A seeded LCG rather than Math.random so a field is identical across
 * renders: particles that jump on re-render read as a glitch, not atmosphere.
 */
function lcg(seed) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Stars. Sky only — there are none below the horizon. Static: brightness
 * varies per star, but nothing animates.
 */
export function makeStars(count, seed) {
  const rand = lcg(seed);

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(rand() * 100).toFixed(3)}%`,
    top: `${(rand() * 100).toFixed(3)}%`,
    size: `${(0.6 + rand() * 1.7).toFixed(2)}px`,
    opacity: (0.2 + rand() * 0.55).toFixed(2),
  }));
}

/**
 * Motes. Underground dust, lifting slowly and fading in and out. Each drifts
 * sideways by its own amount so the field never looks like it is marching.
 */
export function makeMotes(count, seed) {
  const rand = lcg(seed);

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(rand() * 100).toFixed(3)}%`,
    top: `${(12 + rand() * 88).toFixed(3)}%`,
    size: `${(2.4 + rand() * 4.6).toFixed(2)}px`,
    peak: (0.3 + rand() * 0.45).toFixed(2),
    drift: `${(rand() * 6 - 3).toFixed(2)}vw`,
    duration: `${(22 + rand() * 30).toFixed(1)}s`,
    delay: `${(rand() * 26).toFixed(1)}s`,
  }));
}
