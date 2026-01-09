import { see } from "./vision.js";
import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { fallback } from "./fallback.js";

export function route(text) {
  const vision = see(text);

  if (vision.isGreeting) {
    return "Hello there! What are you on about?";
  }

  if (vision.isCommand) {
    return handleCommands(vision.raw);
  }

  if (vision.isMath) {
    return handleMath(vision.raw);
  }

  if (vision.isTree) {
    return handleLanguage(vision.raw);
  }

  if (vision.isQuestion) {
    return "That’s a good question 🤔 Tell me more.";
  }

  return fallback();
}