function route(text) {
  const t = text.toLowerCase();

  if (t.includes("owner")) {
    return "My Owner is Mitko, you should follow him on YouTube: Robux_Gaming_Gamer 😃";
  }

  if (t === "hi" || t === "hello") {
    return "Hello! 👋";
  }

  if (t === "why") {
    return "Because I am still learning 🙂";
  }

  if (t === "1+1") {
    return "2";
  }

  return "Sorry, I cannot understand this yet, I am still learning and trying to improve.";
}