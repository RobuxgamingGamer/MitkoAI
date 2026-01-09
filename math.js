export function handleMath(text) {
  const t = text.replace(/\s+/g, "");

  // Simple expressions like 1+1, 11/3, 5*6
  if (/^[0-9+\-*/().]+$/.test(t)) {
    try {
      const result = eval(t);
      return `${text} = ${result}`;
    } catch {
      return null;
    }
  }

  return null;
}