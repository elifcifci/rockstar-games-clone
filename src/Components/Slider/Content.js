import React from "react";
import SliderHeader from "./SliderHeader";
import { InnerCarouselContainer, Content } from "./styles";
import { motion } from "framer-motion";

const SliderContent = ({
  limit,
  title,
  screenWidth,
  constants,
  visibleForTopPage,
  clicksCount,
  clickLimit,
  click,
}) => {
  let createCarousel = constants.map((constant) => {
    return (
      <div
        className={
          title === "By Game"
            ? "slider-page-container last-slider-inner-container"
            : "slider-page-container"
        }
        key={constant.id}
        title={constant.title}
      >
        <img
          className={
            title === "By Game"
              ? "last-slider_image"
              : "slider-page_image"
          }
          src={constant.link}
        />
        {!visibleForTopPage && constant.description && (
          <div className="slider-page_detail">
            <div className="inner-carousel_figcaption">
              {constant.description}
            </div>
            <h2 className="slider-inside-page_title">{constant.title}</h2>
          </div>
        )}
      </div>
    );
  });

  return (
    <Content>
      {/* This part will be visible when sliders aren't top of page */}
      {!visibleForTopPage && (
        <SliderHeader
          title={title}
          clicksCount={clicksCount}
          clickLimit={clickLimit}
          click={click}
        />
      )}
      <InnerCarouselContainer visibleForTopPage={visibleForTopPage}>
        <motion.div
          drag="x"
          dragConstraints={
            visibleForTopPage
              ? { right: 0, left: -screenWidth }
              : { right: 1, left: -5 }
          }
          animate={{ x: -limit }}
          transition={{ duration: 0.3 }}
          className={
            visibleForTopPage
              ? "motion-container"
              : "motion-container slider-inside-page-container"
          }
        >
          {createCarousel}
        </motion.div>
      </InnerCarouselContainer>
    </Content>
  );
};

export default SliderContent;
