import React from "react";
import { NewswireContainer } from "./styles";
import { countCardsNumber } from "../../Components/Newswire/cardCounter";
import { CreateNewswireCards } from "../../Components/Newswire/index";
import { ViewMoreButton } from "../../Components/Buttons/ViewMoreButton";

function NewswirePreview() {
  let countedCards = countCardsNumber(6);

  return (
    <NewswireContainer>
      <h2>Newswire</h2>
      <CreateNewswireCards isPreview={true} showThisCards={[...countedCards]} />
      <ViewMoreButton text={"View More"} link={"/newswire"} />
    </NewswireContainer>
  );
}

export default NewswirePreview;