export function getLimitedConstant(requestedLimit, [...constant]) {
  const controlledConstant = [];

  for (let index = 0; index <= requestedLimit; index++) {
    constant[index] !== undefined && controlledConstant.push(constant[index]);
  }
  return controlledConstant;
}
