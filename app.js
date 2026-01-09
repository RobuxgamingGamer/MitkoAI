function sendMessage() {
  const input = document.getElementById("input");
  if (!input.value.trim()) return;

  addMessage(input.value, "user");
  remember(input.value);

  const reply = routeInput(input.value);
  addMessage(reply, "ai");

  input.value = "";
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `msg ${type}`;
  div.textContent = text;
  document.getElementById("messages").appendChild(div);
}