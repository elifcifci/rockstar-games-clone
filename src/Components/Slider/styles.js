import { motion } from "framer-motion";
import styled from "styled-components";
import { fontSizes } from "../../Styles/globalStyles";

export const Carousel = styled(motion.div)`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel_watch-button {
    font-size: ${fontSizes.fontSize2};
    font-weight: bold;
    border-radius: 5px;
    padding: 16px 48px 16px 48px;
    border: 2px solid blue;
    width: 80%;
  }
`;

export const ButtonContainer = styled(motion.div)`
  padding: 32px;
  display: flex;
  width: 80%;

  .slider_button {
    margin-right: 8px;
    height: 2px;
    width: 1.5rem;
    border-radius: 2px;
    outline: none;
  }
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  width: 100%;

  .inner-carousel-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    margin: 0;
  }
  .inner-carousel_image {
    width: 100%;
    padding-bottom: 32px;
  }

  .inner-carousel-detail {
    font-size: ${fontSizes.fontSize3};
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .inner-carousel_figcaption {
    font-size: ${fontSizes.fontSize1};
    font-weight: bold;
  }

  .inner-carousel_title {
    margin: 10px 0 25px 0;
  }
`;
