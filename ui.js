import "./updates.js";
import { route } from "./router.js";

window.UI = {
  showTab(id) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  },

  send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    UI.addMessage(text, "user");
    input.value = "";

    const reply = route(text);
    UI.addMessage(reply, "ai");
  },

  addMessage(text, type) {
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.textContent = text;

    const messages = document.getElementById("messages");
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
};

window.onload = () => {
  UI.addMessage("MitkoAI online. 🧠", "ai");
};