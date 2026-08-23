// Generates the hero's background decorations (stars and drifting motes).
// Seeded random so the layout is identical on every render/visit.

function lcg(seed) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

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
