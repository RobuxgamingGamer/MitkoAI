import { route } from "./router.js";

window.UI = {
  send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    UI.addMessage(text, "user");
    input.value = "";

    const reply = route(text);
    if (reply) {
      setTimeout(() => {
        UI.addMessage(reply, "ai");
      }, 300);
    }
  },

  addMessage(text, type) {
    const messages = document.getElementById("messages");
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
};