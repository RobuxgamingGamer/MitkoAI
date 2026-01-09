import { fallback } from "./fallback.js";

export function route(text) {
  const t = text.toLowerCase();

  if (t === "hi" || t === "hello") return "Hey 😄";
  if (t === "who are you") return "I’m MitkoAI. Barely stable, fully vibing.";
  if (t === "owner") return "Mitko. Obviously.";

  return fallback();
}