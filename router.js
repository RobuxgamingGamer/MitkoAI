function route(text) {
  return (
    handleCommands(text) ||
    handleMath(text) ||
    fallback(text)
  );
}