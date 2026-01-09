export function handleMath(text) {
  const clean = text.replace(/\s+/g, "");

  if (/^\d+\+\d+$/.test(clean)) {
    const [a, b] = clean.split("+").map(Number);
    return `${a} + ${b} = ${a + b}`;
  }

  return null; // 🚨 REQUIRED
}