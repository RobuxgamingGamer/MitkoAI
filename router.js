// router.js
import { handleCommands } from "./commands.js";
import { handleMath } from "./math.js";
import { handleQuestions } from "./questions.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  let result;

  result = handleCommands(text);
  if (result !== null) return result;

  result = handleMath(text);
  if (result !== null) return result;

  result = handleQuestions(text);
  if (result !== null) return result;

  result = handleLanguage(text);
  if (result !== null) return result;

  return fallback();
}