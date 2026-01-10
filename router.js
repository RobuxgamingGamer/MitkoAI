// router.js
import { handleQuestions } from "./questions.js";
import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { checkSafety } from "./safety.js";

// RNG helper
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const FUN_FALLBACKS = [
  "Hmm… I’m not sure yet 🤔",
  "That went over my circuits 😅",
  "I don’t understand that yet.",
  "My brain lagged for a second ⚡",
  "Interesting… but I can’t answer that yet."
];

export function route(text) {
  const input = text.trim();
  if (!input) return "";

  // 1) SAFETY — always first
  const safety = checkSafety(input);
  if (safety) {
    return safety.message;
  }

  // 2) COMMANDS (!shut up, unmute, etc.)
  const cmd = handleCommands(input);
  if (cmd) return cmd;

  // 3) MATH (only if it really is math)
  const math = handleMath(input);
  if (math) return math;

  // 4) QUESTIONS / CONVERSATION
  const q = handleQuestions(input);
  if (q) return q;

  // 5) SPECIAL LANGUAGE (TREE, Graham, etc.)
  const lang = handleLanguage(input);
  if (lang) return lang;

  // 6) FUN FALLBACK (no apology spam)
  return pick(FUN_FALLBACKS);
}