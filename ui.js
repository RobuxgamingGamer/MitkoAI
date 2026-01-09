const UI = {
  showTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
  },

  send() {
    const input = document.getElementById('input');
    const text = input.value.trim();
    if (!text) return;

    UI.addMessage(text, 'user');
    input.value = '';

    setTimeout(() => {
      UI.addMessage("I am operational.", "ai");
    }, 300);
  },

  addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.textContent = text;
    const messages = document.getElementById('messages');
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
};