// commands.js
let muted = false;

export function handleCommands(text) {
  const t = text.trim().toLowerCase();

  // UNMUTE
  if (
    t === "start talking again" ||
    t === "talk again" ||
    t === "!unmute" ||
    t === "you can talk again"
  ) {
    muted = false;
    return "Back online. Let’s continue.";
  }

  // IF MUTED → SAY NOTHING
  if (muted) {
    return ""; // ABSOLUTE SILENCE
  }

  // MUTE
  if (t === "!shut up") {
    muted = true;
    return "Okay. I’ll stay quiet until you ask me to talk again 🤐";
  }

  return null;
}