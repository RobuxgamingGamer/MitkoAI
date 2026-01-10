// math.js — Safe math + fractions + algebra + large numbers

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function handleMath(text) {
  const t = text.trim();

  // =========================
  // SPECIAL LARGE CONCEPTS
  // =========================

  if (/^infinity$/i.test(t)) {
    return "Infinity isn’t a number — it represents something without any bound.";
  }

  if (/^graham'?s number$/i.test(t)) {
    return "Graham’s number is an unimaginably large finite number, far beyond anything physical in the universe.";
  }

  if (/^rayo'?s number$/i.test(t)) {
    return "Rayo’s number is vastly larger than Graham’s number and cannot be computed or written explicitly.";
  }

  if (/^tree\(\s*0\s*\)$/i.test(t)) return "TREE(0) = 1.";
  if (/^tree\(\s*1\s*\)$/i.test(t)) return "TREE(1) = 1.";
  if (/^tree\(\s*2\s*\)$/i.test(t)) return "TREE(2) = 3.";
  if (/^tree\(\s*3\s*\)$/i.test(t)) {
    return "TREE(3) is so large it completely dwarfs Graham’s number — yet it is still finite.";
  }

  if (/^tree\(\s*\d+\s*\)$/i.test(t)) {
    return "TREE(n) grows faster than almost any known mathematical function.";
  }

  // =========================
  // ALGEBRA DETECTION
  // =========================

  // Example: x+9=12
  if (/^[a-z]\s*[\+\-\*/]\s*\d+\s*=\s*\d+$/i.test(t)) {
    return pick([
      "That looks like algebra. I can recognize it, but I can’t solve equations yet.",
      "Algebra detected. Equation solving is coming later.",
      "I see an equation — solving for variables isn’t implemented yet."
    ]);
  }

  // =========================
  // SAFE NUMERIC MATH
  // =========================

  // Allow fractions and expressions like 11/2*11/2
  if (/^[\d\s+\-*/().\/]+$/.test(t)) {
    try {
      const result = Function(`"use strict"; return (${t})`)();

      if (typeof result === "number" && isFinite(result)) {
        return `That equals ${result}.`;
      } else {
        return pick([
          "That result is undefined.",
          "That number is too large to handle.",
          "I reached a mathematical limit."
        ]);
      }
    } catch {
      return pick([
        "That math is too complicated for me right now.",
        "I tried calculating that… and failed 😅",
        "That expression broke my calculator.",
        "I’m still learning math like this."
      ]);
    }
  }

  // =========================
  // NOT MATH
  // =========================
  return null;
}