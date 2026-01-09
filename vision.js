export function see(text) {
  const t = text.trim();

  return {
    raw: t,
    lower: t.toLowerCase(),
    isQuestion: t.endsWith("?"),
    isGreeting: /^(hi|hello|hey)$/i.test(t),
    isMath: /^[\d\s+\-*/().]+$/.test(t),
    isTree: /tree\(\d+\)/i.test(t),
    isCommand: /^(stop|shut up)$/i.test(t),
    isEmpty: t.length === 0
  };
}