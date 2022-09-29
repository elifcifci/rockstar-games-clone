import React from "react";
import { Link } from "react-router-dom";

import { StyledAnimatedButtonContainer } from "./styles";

function ViewAndMoreButtons({ isMoreStory, text, link, updateCounter, title }) {
  return (
    <StyledAnimatedButtonContainer>
      <p title={title && title} onClick={updateCounter} className="link-text">
        {isMoreStory ? (
          <>{text}</>
        ) : (
          <Link className="button-link" to={link}>
            {text}
          </Link>
        )}
      </p>
    </StyledAnimatedButtonContainer>
  );
}

export default ViewAndMoreButtons;
