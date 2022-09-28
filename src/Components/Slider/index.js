import React, { useEffect, useRef, useState } from "react";
import { SliderContainer, Carousel } from "./styles";

//Components
import SliderButtons from "./Buttons";
import Detail from "./Detail";
import SliderContent from "./Content";

const Slider = ({ constants, sliderTitle, isVisibleForTopPage }) => {
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

  const slideWithArrows = (event) => {
    event.target.id == 0 && arrowClickCount !== 0
      ? setArrowClickCount((previous) => previous - 1)
      : event.target.id == 1 &&
        arrowClickCount !== constants.length - 1 &&
        setArrowClickCount((previous) => previous + 1);
  };

  return (
    <SliderContainer>
      <div
        className={
          isVisibleForTopPage
            ? "top-carousel-container"
            : "inside-carousel-container"
        }
      >
        <Carousel ref={carouselWidth}>
          <SliderContent
            isVisibleForTopPage={isVisibleForTopPage}
            limit={dragLimit}
            screenWidth={width}
            constants={constants}
            clicksCount={arrowClickCount}
            clickLimit={constants.length - 1}
            slideWithArrows={slideWithArrows}
            title={sliderTitle}
          />
        </Carousel>

        {/* This part will be visible when slider is top of page */}
        {isVisibleForTopPage && (
          <div className="detail-and-buttons-container">
            <Detail constants={constants[activeIndex]} index={activeIndex} />
            <SliderButtons
              activeIndex={activeIndex}
              constants={constants}
              click={(event) => setActiveIndex(event.target.id)}
            />
          </div>
        )}
      </div>
    </SliderContainer>
  );
};

export default Slider;
