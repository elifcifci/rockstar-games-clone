import React, { useEffect, useRef, useState } from "react";
import SliderButtons from "./SliderButtons";
import SliderArrows from "./SliderArrows";
import { SliderContent } from "./SliderContent";
import { WatchNowButton } from "../../Components/Buttons/WatchNowButton";
import { Carousel } from "./styles";

const Slider = ({
  constants,
  sliderTitle,
  visibleTopSlidersButtons,
  visibleForInsidePage,
}) => {
  const carouselWidth = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    setWidth(
      carouselWidth.current.scrollWidth - carouselWidth.current.offsetWidth
    );
  }, []);

  useEffect(() => {
    let goThere = activeIndex * carouselWidth.current.offsetWidth;
    setDragLimit(goThere);

    console.log(
      "offsetWidth: ",
      carouselWidth.current.offsetWidth,
      "scrollWidth : ",
      carouselWidth.current.scrollWidth
    );
  }, [activeIndex]);

  let slideWithArrows = (event) => {
    event.target.id == 0 && activeIndex !== 0
      ? setActiveIndex((previous) => previous - 1)
      : event.target.id == 1 &&
        activeIndex !== constants.length - 1 &&
        setActiveIndex((previous) => previous + 1);
  };

  return (
    <Carousel
      ref={carouselWidth}
      className={
        visibleForInsidePage ? "inside-page-container" : "top-page-container"
      }
    >
      {visibleForInsidePage && (
        <div className="slider-header">
          <div className="slider-header_title">{sliderTitle}</div>
          <SliderArrows click={slideWithArrows} />
        </div>
      )}

      <SliderContent
        isForInsidePage={visibleForInsidePage ? true : false}
        limit={dragLimit}
        screenWidth={width}
        constants={constants}
      />

      {visibleTopSlidersButtons && (
        <>
          <WatchNowButton />
          <SliderButtons
            activeIndex={activeIndex}
            constants={constants}
            click={(event) => setActiveIndex(event.target.id)}
          />
        </>
      )}
    </Carousel>
  );
};

export default Slider;
