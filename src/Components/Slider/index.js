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
  }, [activeIndex]);

  return (
    <Carousel ref={carouselWidth}>
      {visibleForInsidePage && (
        <div className="slider-header">
          <div className="slider-header_title">{sliderTitle}</div>
          <SliderArrows click={() => console.log("click")} />
        </div>
      )}

      <SliderContent
        isForInsidePage={
          visibleForInsidePage
            ? true
            : false
        }
        limit={dragLimit}
        screenWidth={width}
        constants={constants}
      />

      {visibleTopSlidersButtons && <WatchNowButton />}

      {visibleTopSlidersButtons && (
        <SliderButtons
          activeIndex={activeIndex}
          constants={constants}
          click={(event) => setActiveIndex(event.target.id)}
        />
      )}
    </Carousel>
  );
};

export default Slider;
