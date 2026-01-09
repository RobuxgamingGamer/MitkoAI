export function handleMath(text) {
  const clean = text.replace(/\s+/g, "");

  if (/^\d+[\+\-\*\/]\d+$/.test(clean)) {
    try {
      const result = eval(clean);
      return `${clean} = ${result}`;
    } catch {
      return null;
    }
  }

  return null;
}