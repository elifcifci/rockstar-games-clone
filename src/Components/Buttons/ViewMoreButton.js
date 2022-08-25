import React from "react";
import { NewswirePageLink, NewswirePageLinkAnimate } from "./styles";

export function ViewMoreButton({text, link}) {

  return (
      <NewswirePageLink href={link}>
        <p className="link-text">{text}</p>
        <NewswirePageLinkAnimate
          initial={{ scale: 1 }}
          whileHover={{ width: 85, height: 25 }}
        />
      </NewswirePageLink>
  );
}