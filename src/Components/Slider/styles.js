import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";

// export const SliderContainer = styled(motion.div)`
//   cursor: pointer;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   `;

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WatchButton = styled(motion.button)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: ${fontSizes.fontSize2};
  font-weight: bold;
  border-radius: 5px;
  padding: 16px 48px 16px 48px;
  width: 80%;
`;

export const SliderContainer = styled(motion.div)`
  width: 100%;

  .slider-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    margin: 0;
  }

  .slider-content_image {
    width: 100%;
    padding-bottom: 32px;
  }
  .slider-content-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slider-content_description {
    width: 80%;
    font-size: ${fontSizes.fontSize1};
    font-weight: bold;
  }

  .slider-content_title {
    font-size: ${fontSizes.fontSize5};
    font-weight: bolder;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 10px 0 25px 0;
  }

  .activeImage {
    display: inline-block;
    width: 100%;
    position: relative;
  }

  .inactiveImages {
    display: none;
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

    border: solid 2px blue;

    
  }
  .slider_button {
    border: solid;
    border: solid 2px red;
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
