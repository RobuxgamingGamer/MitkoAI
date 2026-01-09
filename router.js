import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  // Normalize input
  const input = text.trim();
  if (!input) return "";

  // 1️⃣ Commands FIRST
  const commandResult = handleCommands(input);
  if (commandResult) return commandResult;

  // 2️⃣ Math SECOND
  const mathResult = handleMath(input);
  if (mathResult) return mathResult;

  // 3️⃣ Language / chat THIRD
  const languageResult = handleLanguage(input);
  if (languageResult) return languageResult;

  // 4️⃣ Fallback ONLY if nothing matched
  return fallback();
}