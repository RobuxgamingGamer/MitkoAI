export function handleCommands(text) {
  const t = text.trim().toLowerCase();

  if (t === "stop") {
    return "Alright, stopping. For now 😶";
  }

  // IMPORTANT
  return null;
}