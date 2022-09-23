import React from "react";
import { AnimatedButtonContainer, ButtonText } from "./styles";

export function ViewMoreButtons({ isMoreStory, text, link, click }) {
  return (
    <AnimatedButtonContainer href={link}>
     <ButtonText onClick={isMoreStory && click} className="link-text">{text}</ButtonText>
   </AnimatedButtonContainer>
   );
}