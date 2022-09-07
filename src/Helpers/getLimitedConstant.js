export function getLimitedConstant(requestedLimit, [...constant]) {
  const controlledConstant = [];

  for (let index = 0; index <= requestedLimit; index++) {
    controlledConstant.push(constant[index]);
  }
  return controlledConstant;
}
