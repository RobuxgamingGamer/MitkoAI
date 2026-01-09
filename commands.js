function handleCommands(text) {
  const t = text.toLowerCase();

  if (t === "hi" || t === "hello") {
    return "Hey 👋 I’m MitkoAI.";
  }

  if (t === "who made you") {
    return "Mitko did 😎";
  }

  return null;
}