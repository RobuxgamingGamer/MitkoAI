function fallback(text) {
  const tips = [
    "Bro I stared at that sentence and nothing happened 🧠💨",
    "I’m calling Mitko 📞",
    "That went straight over my CPU",
    "Try again but with less chaos 😭"
  ];

  return tips[Math.floor(Math.random() * tips.length)];
}