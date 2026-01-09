const Router = {
  route(text) {
    return (
      Commands.handle(text) ||
      MathEngine.handle(text) ||
      Language.handle(text) ||
      Fallback.reply()
    );
  }
};