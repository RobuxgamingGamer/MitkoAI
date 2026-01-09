const UI = {
  send() {
    const input = document.getElementById("input");
    if (!input.value.trim()) return;

    this.add("user", input.value);
    const reply = App.respond(input.value);
    this.add("ai", reply);

    input.value = "";
  },

  add(type, text) {
    const msg = document.createElement("div");
    msg.className = type;
    msg.textContent = text;
    document.getElementById("messages").appendChild(msg);
  },

  showTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
  }
};