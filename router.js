// router.js — FIXED routing order + greetings + questions

import { handleGreeting } from "./greeting.js";
import { handleCommands } from "./commands.js";
import { handleMath } from "./math.js";
import { handleQuestions } from "./questions.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  return (
    handleCommands(text) ||
    handleGreeting(text) ||   // 🔥 THIS WAS MISSING
    handleMath(text) ||
    handleQuestions(text) ||
    handleLanguage(text) ||
    fallback()
  );
}