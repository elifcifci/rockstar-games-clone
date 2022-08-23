import React from "react";
import { SliderContainer } from "./styles";

const SliderContent = ({ activeIndex, sliderConstants }) => {
  let result = sliderConstants.map((constant, index) => {
    return (
      <div
        key={index}
        className={`slider-content  ${
          index === activeIndex ? "activeImage" : "inactiveImages"
        }`}
      >
        <img className="slider-content_image" src={constant.link} alt="" />
        <div className="slider-content-detail">
          <div className="slider-content_description">
            {constant.description}
          </div>
          <h2 className="slider-content_title ">{constant.title}</h2>
        </div>
      </div>
    );
  });

  return <SliderContainer>{result}</SliderContainer>;
};

export default SliderContent;
