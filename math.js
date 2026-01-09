export function handleMath(text) {
  const clean = text
    .toLowerCase()
    .replace("plus", "+")
    .replace("minus", "-")
    .replace("times", "*")
    .replace("x", "*")
    .replace("÷", "/");

  if (!/[0-9+\-*/().]/.test(clean)) return null;

  try {
    const result = Function("return " + clean)();
    if (result === Infinity) return "That result is Infinity ♾️";
    return `🧮 ${clean} = ${result}`;
  } catch {
    return null;
  }
}