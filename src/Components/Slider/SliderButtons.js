import React from "react";
import { ButtonContainer } from "./styles";

function SliderButtons({ activeIndex, click, constants }) {
  return (
    <ButtonContainer>
{constants.map((constant, index) => {
  return (
    <label
      key={index}
      id={constant.id}
      htmlFor={constant.id}
      className="button-label"
      onClick={click}
    >
      <span
        id={constant.id}
        className={`${
          activeIndex == index
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
