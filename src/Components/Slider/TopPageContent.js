import React from "react";

//Components
import Carousel from "./Carousel";

import { StyledInnerCarouselContainer, StyledContent } from "./styles";
import { motion } from "framer-motion";

const TopPageContent = ({ limit, title, screenWidth, constants }) => {
  return (
    <StyledContent>
      <StyledInnerCarouselContainer isVisibleForTopPage={true}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -screenWidth }}
          animate={{ x: -limit }}
          transition={{ duration: 0.3 }}
          className="motion-container"
        >
          <Carousel
            isVisibleForTopPage={true}
            constants={constants}
            title={title}
          />
        </motion.div>
      </StyledInnerCarouselContainer>
    </StyledContent>
  );
};

export default TopPageContent;
