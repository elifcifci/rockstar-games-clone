import React from "react";
import {
  NewswireButtonContainer,
  NewswireButton,
  NewswirePageLinkAnimate,
} from "./styles";

export function MoreStoriesButton({ text, click }) {
  return (
    <NewswireButtonContainer>
      <NewswireButton type="button" onClick={click}>
        {text}
      </NewswireButton>
      <NewswirePageLinkAnimate
        initial={{ scale: 1 }}
        whileHover={{ width: 85, height: 25 }}
      />
    </NewswireButtonContainer>
  );
}
