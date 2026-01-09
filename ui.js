const UI = {
  switchTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.style.display = "none");

    document.getElementById(tab + "-tab").classList.add("active");
    document.getElementById(tab + "-view").style.display = "block";
  },

  send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    UI.addMessage(text, "user");
    input.value = "";

    if (typeof route !== "function") {
      UI.addMessage("Router not available.", "ai");
      return;
    }

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