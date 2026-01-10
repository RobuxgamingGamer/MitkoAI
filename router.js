// router.js
import { handleCommands } from "./commands.js";
import { handleQuestions } from "./questions.js";
import { handleLanguage } from "./language.js";
import { handleMath } from "./math.js";
import { fallback } from "./fallback.js";

export function route(text) {
  return (
    handleCommands(text) ||
    handleQuestions(text) ||
    handleLanguage(text) ||
    handleMath(text) ||
    fallback()
  );
}