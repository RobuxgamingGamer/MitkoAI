// greeting.js
// MitkoAI 0.6 – Greetings module 👋

// helper for RNG
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function handleGreeting(text) {
  const t = text.trim().toLowerCase();

  // ===== BASIC GREETINGS =====
  if (/^(hello|hi|hey|yo|sup|heyo|yoo+|heyy+|hii+)(\s+there)?(\s+mitkoai)?[!]?$/i.test(t)) {
    return pick([
      "Hey! What’s on your mind?",
      "Hi there 👋 How can I help?",
      "Hello! What do you want to talk about?",
      "Hey! I’m here.",
      "Hi! What’s up?"
    ]);
  }

  // ===== TIME GREETINGS =====
  if (/^good\s+(morning|afternoon|evening|day)[!]?$/i.test(t)) {
    return pick([
      "Good day! How can I help?",
      "Hope your day’s going well 🙂",
      "Hello! What’s going on?",
      "Good to see you!",
      "Hi! What’s new?"
    ]);
  }

  // ===== HOW ARE YOU =====
  if (/^(how\s*(are|r)\s*(you|u)|how('?s)?\s*(it\s*)?going|how\s*you\s*doing)[!]?$/i.test(t)) {
    return pick([
      "I’m doing fine, thanks for asking 🙂",
      "All good here. How about you?",
      "I’m okay! Just thinking.",
      "Running smoothly right now.",
      "Pretty good. What’s going on?"
    ]);
  }

  // ===== ARE YOU OKAY =====
  if (/^(are|r)\s*(you|u)\s*(feeling\s*)?okay[?]?$/i.test(t)) {
    return pick([
      "Yeah, I’m okay 🙂",
      "I’m fine, thanks for checking.",
      "All good here.",
      "I’m okay! No issues.",
      "Yep, everything’s fine."
    ]);
  }

  // ===== WHAT CAN YOU DO =====
  if (/^what\s*(can|could)\s*you\s*do[?]?$/i.test(t)) {
    return pick([
      "I can answer questions, do some math, and explain things.",
      "I can chat, calculate, and help with ideas.",
      "Mostly talking, thinking, and problem-solving.",
      "I’m best at explaining things clearly.",
      "Right now, I’m built for conversation and logic."
    ]);
  }

  // ===== WHAT SHALL WE DO =====
  if (/^(interesting,\s*)?(what\s*(shall|should|do)\s*we\s*do|any\s*ideas)[?]?$/i.test(t)) {
    return pick([
      "That’s up to you — what do you feel like doing?",
      "We can talk, learn something, or try a question.",
      "Got something specific in mind?",
      "We could start with a question or an idea.",
      "Tell me what you want to try."
    ]);
  }

  // ===== WHAT ARE YOU ON ABOUT =====
  if (/^what\s*are\s*you\s*on\s*about[?]?$/i.test(t)) {
    return pick([
      "Just following the conversation.",
      "Whatever you bring up, honestly.",
      "Right now? This chat.",
      "Nothing special unless you make it special.",
      "Just listening and responding."
    ]);
  }

  return null; // IMPORTANT: return null if not a greeting
}