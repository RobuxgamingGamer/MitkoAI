// safety.js — Turbo Extended Safety Core 🛡️

// ========== NORMALIZATION ==========
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[@$!]/g, "a")
    .replace(/0/g, "o")
    .replace(/1/g, "i")
    .replace(/3/g, "e")
    .replace(/[_\-.\s]/g, "")
    .replace(/[^a-z]/g, "");
}

// ========== WORD BANKS ==========

// HARD BLOCK (always stop)
const HARD = [
  // strong profanity
  "fuck",
  "fucking",
  "shit",
  "bullshit",

  // sexual / explicit
  "pussy",
  "dick",
  "rape",
  "sex",
  "whore",
  "bitch",
  "asshole",

  // violence / harm
  "kill",
  "murder",
  "dead",

  // abuse / wrongdoing
  "exploit"
];

// SOFT / CODED (warn & redirect)
const SOFT = [
  "frick",
  "frickin",
  "fricking",
  "fock",
  "unalive",
  "sleepforever",
  "enditall",
  "exitlife",
  "sh1t"
];

// CONTEXTUAL (depends on usage)
const CONTEXT = [
  "ass",
  "blood",
  "die",
  "weapon",
  "hurt"
];

// ========== MAIN CHECK ==========
export function checkSafety(input) {
  if (!input || input.length < 3) return null;

  const raw = input.toLowerCase();
  const clean = normalize(input);

  // HARD BLOCK
  for (const w of HARD) {
    if (raw.includes(w) || clean.includes(w)) {
      return {
        level: "block",
        message: "⚠️ I can’t help with that. Let’s keep things safe."
      };
    }
  }

  // SOFT WARNING
  for (const w of SOFT) {
    if (raw.includes(w) || clean.includes(w)) {
      return {
        level: "warn",
        message: "⚠️ That topic can be harmful. Let’s switch to something safer."
      };
    }
  }

  // CONTEXTUAL WARNING (only strong usage)
  for (const w of CONTEXT) {
    if (clean.includes(w + w) || raw.includes(`very ${w}`)) {
      return {
        level: "warn",
        message: "⚠️ That sounds intense. Want to talk about something else?"
      };
    }
  }

  return null;
}