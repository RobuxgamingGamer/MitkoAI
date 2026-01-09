const UI = {
  show(tab) {
    document.getElementById("chat").classList.remove("active");
    document.getElementById("updates").classList.remove("active");
    document.getElementById("tab-chat").classList.remove("active");
    document.getElementById("tab-updates").classList.remove("active");

    document.getElementById(tab).classList.add("active");
    document.getElementById("tab-" + tab).classList.add("active");
  },

  send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    UI.addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
      UI.addMessage("I am operational.", "ai");
    }, 300);
  },

  addMessage(text, type) {
    const box = document.createElement("div");
    box.className = "msg " + type;
    box.textContent = text;
    document.getElementById("messages").appendChild(box);
    box.scrollIntoView({ behavior: "smooth" });
  }
};