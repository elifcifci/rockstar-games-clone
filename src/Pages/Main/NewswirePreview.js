import React from "react";
import { Container } from "./styles";
import { countCardsNumber } from "../../Components/Newswire/cardCounter";
import { CreateNewswireCards } from "../../Components/Newswire/index";
import { ViewMoreButton } from "../../Components/Buttons/ViewMoreButton";

function NewswirePreview() {
  let countedCards = countCardsNumber(6);

  return (
    <Container>
      <h2>Newswire</h2>
      <CreateNewswireCards showThisCards={[...countedCards]} />
      <ViewMoreButton text={"View More"} link={"/newswire"} />
    </Container>
  );
}

export default NewswirePreview;
