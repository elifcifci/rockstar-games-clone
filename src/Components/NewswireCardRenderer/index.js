import React from "react";
import Cards from "./Cards";
import { NewswireContainer, NewswirePreviewContainer } from "./styles";

function NewswireCardRenderer({ constants, isPreview, isTopCard }) {
  let copyConstant = [...constants];
  const cardTypes = isTopCard;

  return isPreview ? (
    <NewswirePreviewContainer>
      <Cards constants={constants} />
    </NewswirePreviewContainer>
  ) : (
    <NewswireContainer firstCard={cardTypes}>
      <Cards
        firstCard={isTopCard}
        constants={
          isTopCard
            ? [copyConstant[0]]
            : copyConstant.slice(1, copyConstant.length)
        }
      />
    </NewswireContainer>
  );
}

export default NewswireCardRenderer;
