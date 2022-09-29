import React from "react";
import Cards from "./Cards";
import {
  StyledNewswireContainer,
  StyledNewswirePreviewContainer,
} from "./styles";

function NewswireCardRenderer({ constants, isPreview, isTopCard }) {
  let copyConstant = [...constants];
  const cardTypes = isTopCard;

  return isPreview ? (
    <StyledNewswirePreviewContainer>
      <Cards constants={constants} />
    </StyledNewswirePreviewContainer>
  ) : (
    <StyledNewswireContainer firstCard={cardTypes}>
      <Cards
        firstCard={isTopCard}
        constants={
          isTopCard
            ? [copyConstant[0]]
            : copyConstant.slice(1, copyConstant.length)
        }
      />
    </StyledNewswireContainer>
  );
}

export default NewswireCardRenderer;
