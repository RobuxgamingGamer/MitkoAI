document.addEventListener("DOMContentLoaded", () => {
  UI.addMessage("MitkoAI online. 🧠", "ai");

  const updates = [
    "0.1 – Basic chat",
    "0.2 – Math engine",
    "0.3 – Commands",
    "0.4 – Memory",
    "0.5 – Modular brain 🧠"
  ];

  const list = document.getElementById("updateList");
  updates.forEach(u => {
    const li = document.createElement("li");
    li.textContent = u;
    list.appendChild(li);
  });
});