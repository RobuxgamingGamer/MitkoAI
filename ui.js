const chatBox = document.getElementById("chat");

export function addMessage(text, sender = "ai") {
  const msg = document.createElement("div");
  msg.className = sender === "user" ? "msg user" : "msg ai";
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}