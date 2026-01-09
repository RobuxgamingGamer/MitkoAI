const UI = {
  showTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
  },

  addMessage(text, who) {
    const msg = document.createElement("div");
    msg.className = `msg ${who}`;
    msg.textContent = text;
    document.getElementById("messages").appendChild(msg);
    msg.scrollIntoView({ behavior: "smooth" });
  }
};