import styled from "styled-components";
import { motion } from "framer-motion";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

export const AnimatedButtonContainer = styled(motion.a)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 32px;

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
  font-weight: bold;
  border-radius: 5px;
  padding: 16px 48px 16px 48px;
  width: 100%;
  margin-top: 2rem;

  @media ${screen.tablet} {
    margin-bottom: 3rem;
  }
  @media ${screen.laptopS} {
    margin-bottom: 0;
    padding: 20px 60px 20px 60px;
    font-weight: 700;
  }
`;
