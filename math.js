// math.js
export function handleMath(text) {
  const t = text.trim();

  // ONLY allow real math characters
  if (!/^[\d\s+\-*/().?=]+$/.test(t)) {
    return null; // VERY IMPORTANT
  }

  const replies = [
    "This math is too complicated for me. I am still learning and trying to improve 🧠",
    "I’m not confident with this math yet. Still learning 😅",
    "Math detected, but I’m not ready to solve this one.",
    "I’m still learning math. Try something simpler."
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}