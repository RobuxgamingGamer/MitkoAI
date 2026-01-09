const MathEngine = {
  handle(text) {
    try {
      if (!/[0-9]/.test(text)) return null;

      const cleaned = text
        .replace(/plus/gi, "+")
        .replace(/minus/gi, "-")
        .replace(/times|x/gi, "*")
        .replace(/divided by/gi, "/")
        .replace(/[^0-9+\-*/().]/g, "");

      if (!cleaned) return null;

      const result = Function("return " + cleaned)();
      return `🧮 ${cleaned} = ${result}`;
    } catch {
      return "❌ Invalid math expression.";
    }
  }
};