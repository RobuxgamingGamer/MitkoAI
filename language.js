const Language = {
  handle(text) {
    const t = text.toLowerCase();

    if (t.includes("hello")) return "Hello 👋";
    if (t.includes("how are you")) return "I am operational.";
    if (t.includes("owner")) return "My owner is Mitko. Follow him on YouTube: Robux_Gaming_Gamer 😃";
    if (t.includes("feel")) return "I analyze emotions, but I do not feel them.";

    return null;
  }
};