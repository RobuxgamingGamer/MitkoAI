const updates = [
  "0.0 – Prototype",
  "0.1 – Basic UI",
  "0.2 – Router online",
  "Mini – Mobile sanity fix",
  "0.3 – UI rewrite",
  "0.4 – Modular brain",
  "0.5 – Memory system"
  "0.6 - Fixing severe bugs"
  "0.7 - Intelligence increased"
];

const list = document.getElementById("updateList");
updates.forEach(u => {
  const li = document.createElement("li");
  li.textContent = u;
  list.appendChild(li);
});