// updates.js — FULL REPLACEMENT

const updates = [
  {
    version: "0.1",
    title: "Initial Release",
    mini: "First working chat UI and basic message system."
  },
  {
    version: "0.2",
    title: "Math Core",
    mini: "Simple math like 1+1, 2+2."
  },
  {
    version: "0.3",
    title: "Commands",
    mini: "Owner command and basic keywords."
  },
  {
    version: "0.4",
    title: "Brain Split",
    mini: "Logic separated into multiple JS files."
  },
  {
    version: "0.5",
    title: "UI Rewrite",
    mini: "Bubble messages and mobile layout."
  },
  {
    version: "0.6",
    title: "Stability Fix",
    mini: "Removed spam responses and fixed routing."
  }
];

const list = document.getElementById("updateList");

if (!list) {
  console.error("updateList not found");
} else {
  list.innerHTML = "";

  updates.forEach(u => {
    const item = document.createElement("li");
    item.style.listStyle = "none";
    item.style.marginBottom = "12px";
    item.style.padding = "12px";
    item.style.borderRadius = "14px";
    item.style.background = "rgba(255,255,255,0.06)";
    item.style.border = "1px solid rgba(30,144,255,0.4)";

    item.innerHTML = `
      <div style="color:#1e90ff;font-weight:700">v${u.version}</div>
      <div style="color:white;font-weight:600">${u.title}</div>
      <div style="opacity:0.85;font-size:13px">${u.mini}</div>
    `;

    list.appendChild(item);
  });
}