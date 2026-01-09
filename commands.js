const Commands = {
  handle(text) {
    if (text.startsWith("!")) {
      if (text === "!owner") return "Owner: Mitko 👑";
      if (text === "!help") return "Available: math, questions, commands";
    }
    return null;
  }
};