export function handleLanguage(text) {
  const t = text.toLowerCase();

  if (t === "hello" || t === "hi" || t === "hey") {
    return "Hello! 👋";
  }

  if (t.includes("how are you")) {
    return "I am operational.";
  }

  if (t.includes("who are you")) {
    return "I am MitkoAI.";
  }

  // ❗ VERY IMPORTANT
  return null;
}