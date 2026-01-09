// math.js
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function handleMath(text) {
  // allow ONLY numbers and math symbols
  if (!/^[\d\s+\-*/().]+$/.test(text)) return null;

  try {
    const result = Function(`"use strict"; return (${text})`)();
    return `That equals ${result}.`;
  } catch {
    return pick([
      "This math is too complicated for me, I am still learning and trying to improve.",
      "I can’t solve this yet, but I’m working on getting better.",
      "That calculation is beyond my current abilities.",
      "This math goes a bit too far for me right now.",
      "I’m still learning — this one is too complex."
    ]);
  }
}