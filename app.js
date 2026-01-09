const messages = document.getElementById("messages");
const input = document.getElementById("input");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function send() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    respond(text);
  }, 400);
}

function respond(text) {
  const t = text.toLowerCase();

  if (t.includes("hello")) {
    addMessage("Hello 👋 I am MitkoAI.", "ai");
    return;
  }

  if (t.includes("how are you")) {
    addMessage("I am operational.", "ai");
    return;
  }

  if (t.includes("owner")) {
    addMessage(
      "My owner is Mitko. You should follow him on YouTube — Robux_Gaming_Gamer 😃",
      "ai"
    );
    return;
  }

  addMessage(
    "Sorry, I cannot understand this yet, I am still learning and trying to improve.",
    "ai"
  );
}

function showTab(name) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));

  document.getElementById(name).classList.add("active");
  event.target.classList.add("active");
}

// Boot message
addMessage("MitkoAI 0.5 online. Intelligence-first mode active 🧠", "ai");