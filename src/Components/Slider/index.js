import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Carousel, InnerCarousel, ButtonContainer } from "./styles";
import { sliderPhotographs } from "../../Constants/slider";
import { colors } from "../../Styles/globalStyles";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carouselWidth = useRef();

  useEffect(() => {
    console.log("carouselWidth: ", carouselWidth.current.scrollWidth);
    console.log("offsetWidth: ", carouselWidth.current.offsetWidth);
    setWidth(carouselWidth.current.scrollWidth-carouselWidth.current.offsetWidth)
}, []);

  let createCarousel = sliderPhotographs.map((photograph) => {
    return (
      <div key={photograph.id} className="inner-carousel-content">
        <img className="inner-carousel_image" src={photograph.link} />
        <div className="inner-carousel-detail">
          <div className="inner-carousel_figcaption">
            Grand Theft Auto Online
          </div>
          <h2 className="inner-carousel_title">{photograph.title}</h2>
        </div>
      </div>
    );
  });
  let createSliderButton = sliderPhotographs.map((photograph) => {
    return <button className="slider_button" key={photograph.id}></button>;
  });

  return (
    <>
      <Carousel ref={carouselWidth}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {createCarousel}
        </InnerCarousel>
        <motion.button
          initial={{
            background: colors.backgroundColor,
            color: "white",
            border: "1px solid white",
          }}
          whileHover={{
            background: colors.secondary,
            color: "black",
            border: `1px solid ${colors.secondary}`,
          }}
          className="carousel_watch-button"
          type="button"
        >
          WATCH NOW
        </motion.button>
        <ButtonContainer className="carousel-button-container">{createSliderButton}</ButtonContainer>
      </Carousel>
    </>
  );
};

export default Slider;
