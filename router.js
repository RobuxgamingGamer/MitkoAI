// router.js
import { handleQuestions } from "./questions.js";
import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  return (
    handleCommands(text) ||
    handleQuestions(text) ||   // MUST be before math
    handleLanguage(text) ||
    handleMath(text) ||        // MUST be last
    fallback()
  );
}