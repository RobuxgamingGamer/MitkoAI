const UI = {
  showTab(tab) {
    document.querySelectorAll(".tab").forEach(t => {
      t.classList.remove("active");
    });
    document.getElementById(tab).classList.add("active");
  },

  send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    this.addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
      const response = window.route ? route(text) : "No router loaded.";
      this.addMessage(response, "ai");
    }, 300);
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

window.UI = UI;