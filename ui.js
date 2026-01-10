import { route } from "./router.js";
import { analyzeImage } from "./vision.js";

let lastVision = null;

window.UI = {
  send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    UI.addMessage(text, "user");
    input.value = "";

    const reply = route(text, lastVision);
    if (reply) UI.addMessage(reply, "ai");
  },

  addMessage(text, type) {
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.textContent = text;
    document.getElementById("messages").appendChild(div);
    div.scrollIntoView({ behavior: "smooth" });
  }
};

// Image button
document.getElementById("imageBtn").onclick = () =>
  document.getElementById("imageInput").click();

document.getElementById("imageInput").onchange = e => {
  const file = e.target.files[0];
  if (!file) return;

  const img = new Image();
  const reader = new FileReader();

  reader.onload = () => img.src = reader.result;
  img.onload = () => {
    lastVision = analyzeImage(img);
    UI.addMessage(
      "📷 Image received. Type !image to analyze.",
      "ai"
    );
  };

  reader.readAsDataURL(file);
};