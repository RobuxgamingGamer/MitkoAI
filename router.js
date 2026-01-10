// router.js
import { handleCommands } from "./commands.js";
import { handleMath } from "./math.js";
import { handleQuestions } from "./questions.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  return (
    handleCommands(text) ??
    handleMath(text) ??
    handleQuestions(text) ??
    handleLanguage(text) ??
    fallback()
  );
}