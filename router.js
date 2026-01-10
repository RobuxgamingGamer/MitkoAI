import { handleQuestions } from "./questions.js";
import { handleMath } from "./math.js";
import { handleCommands } from "./commands.js";
import { handleLanguage } from "./language.js";
import { checkSafety } from "./safety.js";

export function route(text, vision) {
  const input = text.trim();
  if (!input) return "";

  // SAFETY FIRST
  const safety = checkSafety(input);
  if (safety) return safety.message;

  // IMAGE COMMAND
  if (input === "!image") {
    if (!vision) return "No image loaded yet.";

    return (
      "🖼️ Image Analysis\n" +
      `• Avg color: ${vision.avgColor} (${vision.color})\n` +
      `• Brightness: ${vision.brightness} (${vision.exposure})\n` +
      `• Texture: ${vision.texture}\n` +
      `• Text detected: ${vision.textLikely ? "Likely" : "Unlikely"}\n\n` +
      "Visual understanding is approximate."
    );
  }

  return (
    handleCommands(input) ||
    handleMath(input) ||
    handleQuestions(input) ||
    handleLanguage(input) ||
    "Hmm… I’m not sure how to answer that yet 🤔"
  );
}