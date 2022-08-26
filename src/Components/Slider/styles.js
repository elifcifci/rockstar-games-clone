import { motion } from "framer-motion";
import styled from "styled-components";
import { fontSizes, colors } from "../../Styles/globalStyles";

export const Carousel = styled(motion.div)`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;

  .slider-inside-page-container {
    width: 80%;
    margin: 0 25px 0 4px;
    border-radius: 10px;
  }
  
  .carousel_watch-button {
    font-size: ${fontSizes.fontSize2};
    font-weight: bold;
    border-radius: 5px;
    padding: 16px 48px 16px 48px;
    width: 80%;
  }

  .slider-header {
    width: 80%;
    margin-bottom: 25px ;
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  .slider-header_title {
    font-size: ${fontSizes.fontSize4};
    font-weight: bold;
  }

  .slider_arrow {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: solid;
  }
`;

export const ButtonContainer = styled(motion.div)`
  padding: 32px 0 32px 0;
  display: flex;
  width: 80%;

  .button-label {
    height: 20px;
    cursor: pointer;
    width: 1.5rem;
    margin-right: 8px;
  }

  .slider_button {
    display: inline-block;
    background-color: ${colors.opacityColor};
    margin-right: 8px;
    height: 2px;
    width: 1.5rem;
    border-radius: 2px;
    outline: none;
  }

  .active-dot {
    background-color: white;
  }
`;

export const ArrowButtonContainer = styled.div``;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  width: 100%;

  .slider-inside-page-container {
    min-width: 100%;
  }

  .slider-top-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    margin: 0;
  }

  .slider-inside-page-inner-content{
    width: 100%;
    border: 1px solid ${colors.border};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .slider-top-page-inner-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .slider-inside-page_image {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-bottom: 0;
  }

  .slider-top-page_image {
    width: 100%;
    padding-bottom: 32px;
  }

  .slider-inside-page_detail {
    padding: 24px 19px 24px 19px;
    
  }
  
  .slider-top-page_detail {
    font-size: ${fontSizes.fontSize3};
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .slider-inside-page_title {
    font-size:${fontSizes.fontSize2} ;
    margin-top: 5px;
    margin-bottom: 25px;
  }

  .inner-carousel_figcaption {
    font-size: ${fontSizes.fontSize1};
    font-weight: bold;
  }

  .slider-top-page_title {
    margin: 10px 0 25px 0;
  }
`;
