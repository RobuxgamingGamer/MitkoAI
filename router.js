import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  let result;

  result = handleCommands(text);
  if (result) return result;

  result = handleMath(text);
  if (result) return result;

  result = handleLanguage(text);
  if (result) return result;

  return fallback(text);
}