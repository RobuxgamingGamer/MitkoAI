import { route } from "./router.js";
import { addMessage } from "./ui.js";

const input = document.getElementById("input");
const sendBtn = document.getElementById("send");

sendBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const reply = route(text);
  addMessage(reply, "ai");
};