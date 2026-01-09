import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  const result =
    handleCommands(text) ??
    handleMath(text) ??
    handleLanguage(text);

  return result ?? fallback();
}