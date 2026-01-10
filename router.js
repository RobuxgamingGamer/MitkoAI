import { handleQuestions } from "./questions.js";
import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

// 🎲 RNG helper
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🤖 Funny fallback replies
const FUNNY_FALLBACKS = [
  "🤖 I stared at that for a bit… still confused.",
  "🧠 My brain lagged for a second there.",
  "😵 That went over my head. Try another angle?",
  "🤔 I don’t know this one yet — but I will.",
  "🌀 Processing… nope, nothing yet.",
  "👀 I see words. They do things. I think.",
  "😅 That one’s outside my current brain capacity.",
  "📡 Signal received. Meaning not found."
];

export function route(text) {
  return (
    handleCommands(text) ??
    handleMath(text) ??
    handleQuestions(text) ??
    handleLanguage(text) ??
    fallback() ??
    pick(FUNNY_FALLBACKS)
  );
}