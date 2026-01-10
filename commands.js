// commands.js
let muted = false;

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function handleCommands(text) {
  const t = text.trim().toLowerCase();

  // SHUT UP (mute)
  if (/^!shut\s*up$/i.test(t)) {
    muted = true;
    return "Okay. I’ll stay quiet until you ask me to talk again 🤐";
  }

  // TALK AGAIN (unmute)
  if (
    /^(start talking again|talk again|you can talk again|resume talking)$/i.test(t)
  ) {
    if (!muted) return "I’m already talking 🙂";
    muted = false;
    return pick([
      "I’m back 🙂",
      "Okay, I’ll talk again.",
      "Back online. Let’s continue.",
      "I’m listening again."
    ]);
  }

  // If muted, say nothing
  if (muted) return null;

  return null;
}