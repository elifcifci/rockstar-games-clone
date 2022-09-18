import styled from "styled-components";
import { motion } from "framer-motion";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

export const AnimatedButtonContainer = styled(motion.a)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .link-text {
    z-index: 2;
    margin: 0 0 3px 0;
  }

  @media ${screen.tablet} {
    .link-text {
      font-size: ${fontSizes.size4};
    }
  }
`;

export const MoreStoryButton = styled(motion.button)`
  background-color: transparent;
  border: none;
  color: white;
  z-index: 2;
  margin: 0 0 3px 0;

  @media ${screen.tablet} {
    font-size: ${fontSizes.size4};
  }
`;

export const ButtonAnimation = styled(motion.div)`
  background-color: ${colors.secondary};
  width: 75px;
  height: 4px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;

  @media ${screen.tablet} {
    width: 90px;
  }
`;

export const SliderWatchButton = styled(motion.button)`
  font-size: ${fontSizes.size3};
  font-weight: 700;
  border-radius: 0.25rem;
  padding: 16px 48px;
  width: 100%;
  box-sizing: border-box;

  @media${screen.mobileXL} {
    max-width: 200px;
  }

  @media${screen.tablet} {
    padding: 18px 0;
    max-width: 230px;
    height: 56px;
    font-size: ${fontSizes.size4};
  }  

  @media ${screen.laptopS} {
    margin-bottom: 0;
    font-weight: 700;
    padding: 20px 0px;
    max-width: 250px;
    height: 62px;
  }

  @media${screen.biggestScreen} {
      font-size: ${fontSizes.size6};
      padding: 22px 0px;
      height: auto;

  }
`;
