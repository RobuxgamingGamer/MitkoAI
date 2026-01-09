document.getElementById("sendBtn").addEventListener("click", send);
document.getElementById("input").addEventListener("keydown", e => {
  if (e.key === "Enter") send();
});

function send() {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;

  UI.addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    UI.addMessage("I am operational.", "ai");
  }, 400);
}

// Initial message
UI.addMessage("MitkoAI online. Intelligence-first mode active 🧠", "ai");