const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
let uploadedImage = null;
let memory = [];

function addBubble(text, cls) {
  const div = document.createElement("div");
  div.className = `bubble ${cls}`;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

addBubble("MitkoAI 0.5 online. Intelligence-first mode active 🧠", "ai");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  input.value = "";

  addBubble(text, "user");
  memory.push(text);

  setTimeout(() => respond(text), 400);
}

function respond(text) {
  const t = text.toLowerCase();

  if (t.startsWith("!help"))
    return addBubble("Available tools: !math, !image check, !owner", "ai");

  if (t.startsWith("!owner"))
    return addBubble("My owner is Mitko. Follow him on YouTube — Robux_Gaming_Gamer 😃", "ai");

  if (t.startsWith("!math")) {
    try {
      const expr = text.replace("!math", "");
      const result = Function(`return (${expr})`)();
      return addBubble(`🧮 ${expr.trim()} = ${result}`, "ai");
    } catch {
      return addBubble("❌ Invalid math expression.", "ai");
    }
  }

  if (t.startsWith("!image")) {
    if (!uploadedImage)
      return addBubble("No image uploaded yet 📷", "ai");

    return addBubble(
`🖼 Image analysis:
• Name: ${uploadedImage.name}
• Type: ${uploadedImage.type}
• Size: ${(uploadedImage.size/1024).toFixed(1)} KB

Visual understanding is limited. Data inspection successful.`,
    "ai");
  }

  if (t.includes("how are you"))
    return addBubble("I don’t feel emotions, but I’m operating normally 🙂", "ai");

  addBubble("Sorry, I cannot understand this yet, I am still learning and trying to improve.", "ai");
}

function openImage() {
  document.getElementById("imageInput").click();
}

document.getElementById("imageInput").addEventListener("change", e => {
  uploadedImage = e.target.files[0];
  if (uploadedImage)
    addBubble("📷 Image received. Use !image check", "ai");
});

function showTab(id) {
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  event.target.classList.add("active");
}