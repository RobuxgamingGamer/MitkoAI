export function handleMath(text) {
  const t = text.trim();

  // STRICT: only real math allowed
  if (!/^[0-9+\-*/().\s]+$/.test(t)) {
    return null; // ← THIS is the fix
  }

  try {
    const result = Function(`"use strict"; return (${t})`)();
    return `That equals ${result}.`;
  } catch {
    return randomFail();
  }
}

function randomFail() {
  const replies = [
    "This math is too complicated for me, I’m still learning and trying to improve.",
    "I can’t solve that yet — still learning.",
    "That calculation is beyond my current abilities.",
    "I’m not ready for that kind of math yet."
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}