import { motion } from "framer-motion";
import styled from "styled-components";
import { screen, fontSizes, colors } from "../../Styles/globalStyles";

export const Carousel = styled(motion.div)`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .slider-inside-page-container {
    width: 100%;
    padding: 0 2rem;
    box-sizing: border-box;
    margin-left: -10px;
    border-radius: 10px;
    background-color: ${colors.black};
  }

  .slider-header {
    box-sizing: border-box;
    padding: 0rem 2rem 1.5rem 2rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
    width: 100%;
  }

  .slider-header_title {
    font-size: ${fontSizes.size5};
    font-weight: bold;
  }

  .slider_arrow {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .visible-slider-header .slider-header {
    border: solid;
  }

  .button-container {
    width: 100%;
    padding: 0 2rem 0 2rem;
    box-sizing: border-box;
  }
`;

export const ButtonContainer = styled(motion.div)`
  padding: 32px 0 0 0;
  display: flex;

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

  @media${screen.tablet} {
    .button-label {
      height: 30px;
      width: 4.6rem;
    }

    .slider_button {
      margin-right: 10px;
      height: 4px;
      width: 4.6rem;
    }
  }
`;

export const ArrowButtonContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  .slider-arrow {
    width: 13px;
    fill: white;
  }

  .disabled-arrow {
    fill: ${colors.opacityColor};
  }
`;

export const InnerCarouselContainer = styled.div`
  width: 100%;

  .slider-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    min-width: 100%;
  }

  .slider-page_image {
    width: 100%;
  }

  .slider-page_detail {
    font-size: ${fontSizes.size4};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-gap: 0.5rem;
  }

  .slider-page_title {
    margin: 0;
  }

  .inner-carousel_figcaption {
    font-size: ${fontSizes.size2};
    font-weight: bold;
  }

  @media${screen.mobileM} {
    .slider-page_detail {
      padding: 2rem;
      height: auto;
    }
  }

  ${(props) =>
    props.visibleForTopPage
      ? `
  .slider-page_detail{
    box-sizing: border-box;
    height: auto;
  } `
      : `
  .slider-page-container{
    margin: 0 25px 0 10px;
    border-radius: 10px;
    border: 1px solid ${colors.gray};
    background-color: ${colors.black};
    width: 100%;
  }
  
  .slider-page_image{
    width: 100%;
    border-left-radius: 10px;
    border-right-radius: 10px;
    padding-bottom: 0;
  }

  .slider-page_detail {
    padding: 24px 16px 24px 16px;
  }

  .slider-page_title{
    font-size: ${fontSizes.size3};
    margin: 5px 0 25px 0;
  }

  `}

  ${(props) =>
    props.isLastSlider &&
    `
   .slider-page_image{
    border-radius: 10px;
   }
  `}
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  width: 100%;
`;
