const Updates = {
  init() {
    const list = document.getElementById("updateList");
    if (!list) return;

    list.innerHTML = `
      <li>0.1 – Basic chat</li>
      <li>0.2 – Math engine</li>
      <li>0.3 – Commands</li>
      <li>0.4 – Memory</li>
      <li>0.5 – Modular brain 🧠</li>
    `;
  }
};