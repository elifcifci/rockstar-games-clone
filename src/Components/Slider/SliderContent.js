import React from "react";
import { InnerCarousel } from "./styles";

export const SliderContent = ({
  limit,
  screenWidth,
  constants,
  isForInsidePage,
}) => {
  let createCarousel = constants.map((constant) => {
    return (
      <div
        key={constant.id}
        className={
          isForInsidePage
            ? "slider-inside-page-container"
            : "slider-top-page-container"
        }
      >
        <div
          className={
            isForInsidePage
              ? "slider-inside-page-inner-content"
              : "slider-top-page-inner-content"
          }
        >
          <img
            className={
              isForInsidePage
                ? "slider-inside-page_image"
                : "slider-top-page_image"
            }
            src={constant.link}
          />
          {constant.title && (
            <div
              className={
                isForInsidePage
                  ? "slider-inside-page_detail"
                  : "slider-top-page_detail"
              }
            >
              <div className="inner-carousel_figcaption">{constant.title}</div>
              <h2
                className={
                  isForInsidePage
                    ? "slider-inside-page_title"
                    : "slider-top-page_title"
                }
              >
                {constant.description}
              </h2>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <InnerCarousel
        drag="x"
        dragConstraints={
          isForInsidePage
            ? { right: 1, left: -5 }
            : { right: 0, left: -screenWidth }
        }
        animate={{ x:( -limit ) }}
        transition={{ duration: 0.3 }}
        className={isForInsidePage && "slider-inside-page-container"}
      >
        {createCarousel}
      </InnerCarousel>
    </>
  );
};
