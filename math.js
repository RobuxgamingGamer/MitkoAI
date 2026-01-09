export function handleMath(text) {
  try {
    const result = Function(`"use strict"; return (${text})`)();
    return `That equals ${result}.`;
  } catch {
    return "That math looks weird. Try something simpler.";
  }
}