import React, { useState } from "react";
import { countCardsNumber } from "../../Components/Newswire/cardCounter";
import { CreateNewswireCards } from "../../Components/Newswire/index";
import { MoreStoriesButton } from "../../Components/Buttons/MoreStoriesButton";
import { newswireConstants } from "../../Constants/newswire";

function Newswire() {
  let [counter, setCounter] = useState(19);
  const newswireConstantsLength = newswireConstants.length;
  let countedCards =countCardsNumber(counter);

  let updateCounter = () => {
    let updatedCounter = counter + 20;

    updatedCounter <= newswireConstantsLength
      ? setCounter((counter += 20))
      : setCounter(newswireConstantsLength);
  };

  return (
    <>
      <CreateNewswireCards isPreview={false} showThisCards={[...countedCards]} mainConstantLength = {newswireConstantsLength}/>
      <MoreStoriesButton click={updateCounter} text={"More Stories"} />
    </>
  );
}

export default Newswire;
