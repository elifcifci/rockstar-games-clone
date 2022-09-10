import React from "react";
import {
  AnimatedButtonContainer,
  MoreStoryButton,
  ButtonAnimation,
} from "./styles";

export function MoreStoriesButton({ text, click }) {
  return (
    <AnimatedButtonContainer>
      <MoreStoryButton onClick={click}>
        {text}
      </MoreStoryButton>
      <ButtonAnimation
        initial={{ scale: 1 }}
        whileHover={{ width: 85, height: 25 }}
      />
    </AnimatedButtonContainer>
  );
}
