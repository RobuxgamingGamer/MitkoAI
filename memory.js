const Memory = {
  history: [],

  store(text) {
    this.history.push(text);
    if (this.history.length > 20) this.history.shift();
  }
};