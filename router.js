// router.js
// MitkoAI 0.6 – Fixing severe glitches 🧠👀

import { handleGreeting } from "./greeting.js";
import { handleCommands } from "./commands.js";
import { handleMath } from "./math.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  // Always clean input first
  const input = text.trim();

  // 1️⃣ Greetings (highest priority)
  const greeting = handleGreeting(input);
  if (greeting) return greeting;

  // 2️⃣ Commands (exact matches only)
  const command = handleCommands(input);
  if (command) return command;

  // 3️⃣ Math (pure math expressions)
  const math = handleMath(input);
  if (math) return math;

  // 4️⃣ Language / concepts (TREE, explanations, etc.)
  const language = handleLanguage(input);
  if (language) return language;

  // 5️⃣ Fallback (last resort)
  return fallback();
}