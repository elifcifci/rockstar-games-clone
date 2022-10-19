import React, { useState, useEffect, useContext } from "react";

//Components
import Carousel from "./Carousel";
import SliderHeader from "./Header";

import { StyledInnerCarouselContainer, StyledContent } from "./styles";
import { motion } from "framer-motion";
import WindowSizeContext from "../../context/WindowSizeContext";

const Content = ({
  title,
  screenWidth,
  constants,
  isVisibleForTopPage,
  carouselWidth,
}) => {
  const [arrowClickCount, setArrowClickCount] = useState(0);
  const [dragLimit, setDragLimit] = useState(0);
  const windowSize = useContext(WindowSizeContext);
  const [clickLimit, setClickLimit] = useState(
    Math.ceil(screenWidth / windowSize)
  );

  useEffect(() => {
    let slideAmount = arrowClickCount * carouselWidth.current.offsetWidth;
    setDragLimit(slideAmount);
  }, [arrowClickCount, windowSize]);

  useEffect(() => {
    setClickLimit(Math.ceil(screenWidth / windowSize));
  }, [windowSize, screenWidth]);

  const slideWithArrows = (event) => {
    event.target.id == 0 && arrowClickCount !== 0
      ? setArrowClickCount((previous) => previous - 1)
      : event.target.id == 1 &&
        arrowClickCount !== constants.length - 1 &&
        setArrowClickCount((previous) => previous + 1);
  };

  return (
    <StyledContent>
      <SliderHeader
        title={title}
        clicksCount={arrowClickCount}
        clickLimit={clickLimit}
        slideWithArrows={slideWithArrows}
      />

      <StyledInnerCarouselContainer isVisibleForInnerPage={true}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 1, left: -5 }}
          animate={{ x: -dragLimit }}
          transition={{ duration: 0.3 }}
          className="motion-container slider-inside-page-container"
        >
          <Carousel
            isVisibleForTopPage={isVisibleForTopPage}
            constants={constants}
            title={title}
          />
        </motion.div>
      </StyledInnerCarouselContainer>
    </StyledContent>
  );
};

export default Content;
