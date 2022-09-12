import React, { useEffect, useRef, useState } from "react";
import SliderButtons from "./SliderButtons";
import SliderArrows from "./SliderArrows";
import { SliderContent } from "./SliderContent";
import { WatchButton } from "../Buttons/WatchButton";
import { Carousel } from "./styles";

const Slider = ({
  constants,
  sliderTitle,
  visibleForTopPage,
  isLastSlider
}) => {
  const carouselWidth = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [dragLimit, setDragLimit] = useState(0);
  const [arrowClickCount, setArrowClickCount] = useState(0);

  useEffect(() => {
    setWidth(
      carouselWidth.current.scrollWidth - carouselWidth.current.offsetWidth
    );
  }, []);

  useEffect(() => {
    let slideAmount = activeIndex * carouselWidth.current.offsetWidth;
    setDragLimit(slideAmount);
  }, [activeIndex]);

  useEffect(() => {
    let slideAmount =
      arrowClickCount * (carouselWidth.current.offsetWidth - 30);
    setDragLimit(slideAmount);
  }, [arrowClickCount]);

  let slideWithArrows = (event) => {
    event.target.id == 0 && arrowClickCount !== 0
      ? setArrowClickCount((previous) => previous - 1)
      : event.target.id == 1 &&
        arrowClickCount !== constants.length - 1 &&
        setArrowClickCount((previous) => previous + 1);
  };

  return (
    <Carousel
      // insidePageContainer={visibleForTopPage ? false : true}
      ref={carouselWidth}
      className={visibleForTopPage ? "inside-page-container" : "visible-slider-header  inside-page-container" }
    >
      {/* This part will be visible when sliders aren't top of page */}
      {!visibleForTopPage && (
        <div className="slider-header">
          <div className="slider-header_title">{sliderTitle}</div>
          <SliderArrows
            clicksCount={arrowClickCount}
            clickLimit={constants.length - 1}
            click={slideWithArrows}
          />
        </div>
      )}
      <SliderContent
        visibleForTopPage={visibleForTopPage}
        limit={dragLimit}
        screenWidth={width}
        constants={constants}
        isLastSlider={isLastSlider}
      />

      {/* This part will be visible when slider is top of page */}
      {visibleForTopPage && (
        <div className="button-container">
          <WatchButton text="WATCH NOW" />
          <SliderButtons
            activeIndex={activeIndex}
            constants={constants}
            click={(event) => setActiveIndex(event.target.id)}
          />
        </div>
      )}
    </Carousel>
  );
};

export default Slider;
