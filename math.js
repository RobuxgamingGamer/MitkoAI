function solveMath(text) {
  try {
    const result = Function("return " + text)();
    return `🧮 ${text} = ${result}`;
  } catch {
    return "❌ Invalid math expression.";
  }
}