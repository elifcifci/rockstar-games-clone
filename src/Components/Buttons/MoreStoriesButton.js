import React from "react";
import { NewswireButton } from "./styles";

export function MoreStoriesButton({ text, click }) {
  return <NewswireButton type="button" onClick={click}>{text}</NewswireButton>;
}
