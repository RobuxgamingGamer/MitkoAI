function routeInput(text) {
  if (isMath(text)) return solveMath(text);
  if (isAlgebra(text)) return solveAlgebra(text);
  if (isOwner(text)) return ownerResponse();
  return fallbackResponse();
}