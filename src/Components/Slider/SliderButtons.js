import React from "react";
import { ButtonContainer } from "./styles";

function SliderButtons({ activeIndex, onclick, sliderConstants }) {
  return (
    <ButtonContainer>
      {sliderConstants.map((constants, index) => {
        return (
          <label
            key={index}
            htmlFor={constants.id}
            className="button-label"
            onClick={() => onclick(index)}
          >
            <span
              id={constants.id}
              className={`${
                activeIndex === index
                  ? "slider_button active-dot"
                  : "slider_button"
              }`}
            />
          </label>
        );
      })}
    </ButtonContainer>
  );
}

export default SliderButtons;
