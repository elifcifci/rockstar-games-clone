import React from "react";
import { AnimatedButtonContainer, ButtonText } from "./styles";
import { Link } from "react-router-dom";

export function MoreButtons({ isMoreStory, text, link, click, title }) {
  return (
    <AnimatedButtonContainer>
      <ButtonText title={title && title} onClick={click} className="link-text">
        {isMoreStory ? (
          <>{text}</>
        ) : (
          <Link className="button-link" to={link}>
            {text}
          </Link>
        )}
      </ButtonText>
    </AnimatedButtonContainer>
  );
}
