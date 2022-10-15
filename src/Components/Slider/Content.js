import React from "react";

//Components
import Carousel from "./Carousel";
import SliderHeader from "./Header";

import { StyledInnerCarouselContainer, StyledContent } from "./styles";
import { motion } from "framer-motion";

const Content = ({
  limit,
  title,
  screenWidth,
  constants,
  isVisibleForTopPage,
  clicksCount,
  clickLimit,
  slideWithArrows,
}) => {
  return (
    <StyledContent>
      {/* This part will be visible when sliders aren't top of page */}
      {!isVisibleForTopPage && (
        <SliderHeader
          title={title}
          clicksCount={clicksCount}
          clickLimit={clickLimit}
          slideWithArrows={slideWithArrows}
        />
      )}

      <StyledInnerCarouselContainer isVisibleForTopPage={isVisibleForTopPage}>
        <motion.div
          drag="x"
          dragConstraints={
            isVisibleForTopPage
              ? { right: 0, left: -screenWidth }
              : { right: 1, left: -5 }
          }
          animate={{ x: -limit }}
          transition={{ duration: 0.3 }}
          className={`motion-container  ${
            !isVisibleForTopPage && "slider-inside-page-container"
          }
          `}
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
