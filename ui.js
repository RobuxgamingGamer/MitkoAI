import { route } from "./router.js";
import { getUpdates } from "./updates.js";
import { analyzeImage } from "./vision.js";

const input = document.getElementById("input");
const send = document.getElementById("send");
const messages = document.getElementById("messages");
const imageInput = document.getElementById("imageInput");

const chatTab = document.getElementById("tab-chat");
const updatesTab = document.getElementById("tab-updates");
const chatView = document.getElementById("chat-view");
const updatesView = document.getElementById("updates-view");
const updatesContent = document.getElementById("updates-content");

let lastImage = null;

// tabs
chatTab.onclick = () => switchTab(true);
updatesTab.onclick = () => switchTab(false);

function switchTab(chat) {
  chatTab.classList.toggle("active", chat);
  updatesTab.classList.toggle("active", !chat);
  chatView.classList.toggle("active", chat);
  updatesView.classList.toggle("active", !chat);

  if (!chat) {
    updatesContent.innerHTML = getUpdates()
      .map(u => `<div class="msg bot">${u}</div>`)
      .join("");
  }
}

// messaging
send.onclick = sendMessage;
input.onkeydown = e => e.key === "Enter" && sendMessage();

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  if (text === "!image") {
    if (!lastImage) {
      addMessage("No image loaded yet.", "bot");
      return;
    }
    addMessage(analyzeImage(lastImage), "bot");
    return;
  }

  addMessage(route(text), "bot");
}

function addMessage(text, who) {
  const div = document.createElement("div");
  div.className = `msg ${who}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// image handling
imageInput.onchange = () => {
  const file = imageInput.files[0];
  if (!file) return;
  lastImage = file;
  addMessage("📷 Image loaded. Type !image to analyze it.", "bot");
};