import React, { useEffect, useContext, useRef, useState } from "react";
import { StyledSliderContainer } from "./styles";

//Components
import Detail from "./Detail";
import TopPageContent from "./TopPageContent";
import InnerPageContent from "./InnerPageContent";
import SliderButtons from "../Buttons/SliderButtons";
import WindowSizeContext from "../../context/WindowSizeContext";

const Slider = ({ constants, sliderTitle, isVisibleForTopPage }) => {
  const carouselWidth = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [dragLimit, setDragLimit] = useState(0);
  const windowSize = useContext(WindowSizeContext);

  useEffect(() => {
    let updatedWidth =
      carouselWidth.current.scrollWidth - carouselWidth.current.offsetWidth;

    setWidth(updatedWidth);
  }, []);

  useEffect(() => {
    let slideAmount = activeIndex * carouselWidth.current.offsetWidth;
    setDragLimit(slideAmount);
  }, [activeIndex, windowSize]);

  return (
    <StyledSliderContainer>
      <div
        className={
          isVisibleForTopPage
            ? "top-carousel-container"
            : "inside-carousel-container"
        }
      >
        <div
          id="slider-carousel"
          className="slider-carousel"
          ref={carouselWidth}
        >
          {isVisibleForTopPage ? (
            <TopPageContent
              isVisibleForTopPage={isVisibleForTopPage}
              limit={dragLimit}
              screenWidth={width}
              constants={constants}
              title={sliderTitle}
            />
          ) : (
            <InnerPageContent
              isVisibleForTopPage={isVisibleForTopPage}
              carouselWidth={carouselWidth}
              screenWidth={width}
              constants={constants}
              clickLimit={constants.length - 1}
              title={sliderTitle}
            />
          )}
        </div>

        {/* This part will be visible when slider is top of page */}
        {isVisibleForTopPage && (
          <div className="detail-and-buttons-container">
            <Detail constants={constants[activeIndex]} index={activeIndex} />
            <SliderButtons
              activeIndex={activeIndex}
              constants={constants}
              updateActiveIndex={(event) => setActiveIndex(event.target.id)}
            />
          </div>
        )}
      </div>
    </StyledSliderContainer>
  );
};

export default Slider;
