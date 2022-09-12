import React from "react";
import { InnerCarouselContainer, InnerCarousel } from "./styles";

export const SliderContent = ({
  limit,
  screenWidth,
  constants,
  visibleForTopPage,
  isLastSlider,
}) => {
  let createCarousel = constants.map((constant) => {
    return (
      <div
        className="slider-page-container"
        key={constant.id}
        title={constant.title}
      >
        <img className="slider-page_image" src={constant.link} />
        {constant.description && (
          <div className="slider-page_detail">
            <div className="inner-carousel_figcaption">{constant.description}</div>
            <h2 className="slider-page_title">{constant.title}</h2>
          </div>
        )}
      </div>
    );
  });

  return (
    <InnerCarouselContainer
      visibleForTopPage={visibleForTopPage}
      isLastSlider={isLastSlider}
    >
      <InnerCarousel
        drag="x"
        dragConstraints={
          visibleForTopPage
            ? { right: 0, left: -screenWidth }
            : { right: 1, left: -5 }
        }
        animate={{ x: -limit }}
        transition={{ duration: 0.3 }}
        className={!visibleForTopPage && "slider-inside-page-container"}
      >
        {createCarousel}
      </InnerCarousel>
    </InnerCarouselContainer>
  );
};
