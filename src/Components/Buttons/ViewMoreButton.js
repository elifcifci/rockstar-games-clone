import React from "react";
import { NewswireButtonContainer, NewswirePageLinkAnimate } from "./styles";

export function ViewMoreButton({text, link}) {

  return (
      <NewswireButtonContainer href={link}>
        <p className="link-text">{text}</p>
        <NewswirePageLinkAnimate
          initial={{ scale: 1 }}
          whileHover={{ width: 85, height: 25 }}
        />
      </NewswireButtonContainer>
  );
}