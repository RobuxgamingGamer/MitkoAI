document.addEventListener("DOMContentLoaded", () => {
  const chatTab = document.getElementById("tab-chat");
  const updatesTab = document.getElementById("tab-updates");
  const chat = document.getElementById("chat");
  const updates = document.getElementById("updates");
  const input = document.getElementById("input");
  const sendBtn = document.getElementById("sendBtn");

  function showChat() {
    chatTab.classList.add("active");
    updatesTab.classList.remove("active");
    chat.classList.add("active");
    updates.classList.remove("active");
  }

  function showUpdates() {
    updatesTab.classList.add("active");
    chatTab.classList.remove("active");
    updates.classList.add("active");
    chat.classList.remove("active");
  }

  chatTab.onclick = showChat;
  updatesTab.onclick = showUpdates;

  sendBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) return;

    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.marginBottom = "8px";
    chat.appendChild(msg);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  };
});