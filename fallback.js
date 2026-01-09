export function fallback(text) {
  const jokes = [
    "I have no idea what you just said. I’m calling Mitko 📞",
    "That sentence escaped my brain 💀",
    "Error 404: Intelligence not found (yet)",
    "I’m still learning, don’t bully me 😭"
  ];

  return jokes[Math.floor(Math.random() * jokes.length)];
}