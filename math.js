// math.js
export function handleMath(text) {
  const t = text.trim();

  // Only allow PURE math characters
  if (!/^[0-9+\-*/().\s]+$/.test(t)) {
    return null;
  }

  try {
    const result = Function(`"use strict"; return (${t})`)();
    return `That equals ${result}.`;
  } catch {
    return pick([
      "This math is too complicated for me right now 😵",
      "I’m still learning math, sorry!",
      "That calculation confused me a bit 😅",
      "Math overload… try something simpler."
    ]);
  }
}

// RNG helper
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}