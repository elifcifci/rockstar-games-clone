import { newswireConstants } from "../../Constants/newswire";

export function countCardsNumber(howMany) {
  const controlledConstant = [];
  console.log("howMany: ", howMany);
  let shownCards = howMany;
  for (let index = 0; index < shownCards; index++) {
    controlledConstant.push(newswireConstants[index]);
  }
  return controlledConstant;
}