export function handleCommands(text) {
  const t = text.toLowerCase();

  if (t === "hello" || t === "hi") {
    return "Hello! 👋";
  }

  if (t.includes("owner")) {
    return "My owner is Mitko. You should follow him on YouTube — Robux_Gaming_Gamer 😄";
  }

  return null;
}