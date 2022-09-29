import React from "react";
import { StyledButtonContainer } from "./styles";

function SliderButtons({ activeIndex, updateActiveIndex, constants }) {
  return (
    <StyledButtonContainer>
      {constants.map((constant, index) => {
        return (
          <label
            key={index}
            id={constant.id}
            htmlFor={constant.id}
            className="button-label"
            onClick={updateActiveIndex}
          >
            <span
              id={constant.id}
              className={`slider_button ${
                activeIndex == index && "active-slider_button"
              }`}
            />
          </label>
        );
      })}
    </StyledButtonContainer>
  );
}

export default SliderButtons;
