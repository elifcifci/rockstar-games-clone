import React from "react";
import { AnimatedButtonContainer, ButtonAnimation } from "./styles";

export function ViewMoreButton({ text, link }) {
  return (
    <AnimatedButtonContainer href={link}>
      <p className="link-text">{text}</p>
      <ButtonAnimation
        initial={{ scale: 1 }}
        whileHover={{ width: 85, height: 25 }}
      />
    </AnimatedButtonContainer>
  );
}
