export function handleCommands(text) {
  const t = text.toLowerCase().trim();

  if (t === "hello" || t === "hi") {
    return "Hello! 😊";
  }

  if (t === "who is your owner?" || t === "owner") {
    return "My owner is Mitko. You should follow him on YouTube: Robux_Gaming_Gamer 😃";
  }

  if (t === "stop") {
    return "Okay, stopping that behavior.";
  }

  return null; // 🚨 REQUIRED
}