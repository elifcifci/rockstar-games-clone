import React, { useState } from "react";
import { motion } from "framer-motion";
import SliderContent from "./SliderContent";
import { sliderConstants } from "../../Constants/slider";
import SliderButtons from "./SliderButtons";
import { colors } from "../../Styles/globalStyles";

import { WatchButton, Container } from "./styles";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <SliderContent
        activeIndex={activeIndex}
        sliderConstants={sliderConstants}
      />
      <WatchButton
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
      </WatchButton>
      <SliderButtons
        activeIndex={activeIndex}
        sliderConstants={sliderConstants}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </Container>
  );
}

export default Slider;
