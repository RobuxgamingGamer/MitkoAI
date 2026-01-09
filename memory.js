let lastMessages = [];

function remember(text) {
  lastMessages.push(text);
  if (lastMessages.length > 10) lastMessages.shift();
}