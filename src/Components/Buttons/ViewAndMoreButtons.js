import React from "react";
import { Link } from "react-router-dom";

import { AnimatedButtonContainer, ButtonText } from "./styles";

function ViewAndMoreButtons({ isMoreStory, text, link, click, title }) {
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

export default ViewAndMoreButtons;
