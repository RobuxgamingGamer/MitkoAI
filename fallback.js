export function fallback(text) {
  const replies = [
    "WHAT did you just type?!😭",
    "I’m calling Mitko!",
    "Nah. I refuse.",
    "My brain slipped on a banana 🍌",
    "This is why I need updates.",
    "I was happy before reading that.",
    "That input caused emotional damage.",
    "Try again but like… better.",
    "I blinked and missed the logic."
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}