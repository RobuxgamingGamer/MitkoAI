export function handleCommands(text) {
  const t = text.toLowerCase();

  if (t === "owner" || t.includes("your owner")) {
    return "My owner is Mitko. You should follow him on YouTube — Robux_Gaming_Gamer 😃";
  }

  return null;
}