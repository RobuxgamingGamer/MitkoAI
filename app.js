const messages = document.getElementById("messages");
const input = document.getElementById("input");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "message " + type;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function send() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => respond(text), 300);
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
      "My owner is Mitko. Follow him on YouTube — Robux_Gaming_Gamer 😃",
      "ai"
    );
    return;
  }

  addMessage(
    "Sorry, I cannot understand this yet. I am still learning and trying to improve.",
    "ai"
  );
}

function showTab(name) {
  document.getElementById("chat").classList.add("hidden");
  document.getElementById("updates").classList.add("hidden");
  document.getElementById(name).classList.remove("hidden");

  document.getElementById("chatTab").classList.remove("active");
  document.getElementById("updatesTab").classList.remove("active");

  if (name === "chat") document.getElementById("chatTab").classList.add("active");
  if (name === "updates") document.getElementById("updatesTab").classList.add("active");
}

// Boot
showTab("chat");
addMessage("MitkoAI 0.5 online. Intelligence-first mode active 🧠", "ai");