function isMath(text) {
  return /[\d+\-*/]/.test(text);
}

function isAlgebra(text) {
  return /x/.test(text);
}