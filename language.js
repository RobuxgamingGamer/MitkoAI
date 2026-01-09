export function handleLanguage(text) {
  if (text.length < 2) return null;

  if (text.endsWith("?")) {
    return "That’s a good question 🤔";
  }

  return null;
}