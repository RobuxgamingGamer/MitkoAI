export function handleLanguage(text) {
  if (/tree\(3\)/i.test(text)) {
    return "TREE(3) is so large it can’t be written and cannot fit in the universe, but it is still a finite number.";
  }

  return "TREE(n) grows insanely fast. Even small values explode beyond comprehension.";
}