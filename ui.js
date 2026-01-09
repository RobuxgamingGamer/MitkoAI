const UI = {
  showTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
  },

  send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    UI.addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
      UI.addMessage("I am operational.", "ai");
    }, 400);
  },

  addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `msg ${type}`;
    msg.textContent = text;

    const messages = document.getElementById("messages");
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }
};