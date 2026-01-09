export function handleLanguage(text) {
  const t = text.toLowerCase();

  if (t === "hi" || t === "hello") return "Hello! 👋";
  if (t === "why") return "Can you explain what you mean?";
  if (t.includes("owner")) return "My owner is Mitko. You should follow him on YouTube — Robux_Gaming_Gamer 😃";

  return null;
}