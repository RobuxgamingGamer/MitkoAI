export function handleCommands(text) {
  if (/^stop$/i.test(text)) {
    return "Alright, stopping. For now 😶";
  }

  return "Command recognized, but not implemented yet.";
}