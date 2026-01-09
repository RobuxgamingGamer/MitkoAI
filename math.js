export function handleMath(text) {
  try {
    if (/^[0-9+\-*/().\s]+$/.test(text)) {
      return `${text} = ${eval(text)}`;
    }
  } catch {
    return null;
  }
  return null;
}