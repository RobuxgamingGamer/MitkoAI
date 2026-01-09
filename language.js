export function handleLanguage(text) {
  const t = text.toLowerCase();

  if (t.includes("hate")) {
    return "I’m sorry you feel that way 😕";
  }

  if (t.includes("why")) {
    return "That’s a good question. Can you explain more?";
  }

  return null; // 🚨 REQUIRED
}