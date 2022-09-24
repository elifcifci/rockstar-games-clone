import styled from "styled-components";
import { motion } from "framer-motion";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

export const AnimatedButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media ${screen.tablet} {
    .link-text {
      font-size: ${fontSizes.size4};
    }
  }
`;

export const ButtonText = styled(motion.p)`
  color: white;
  position: relative;
  line-height: 25px;
  z-index: 1;

  &::before {
    content: "";
    height: 4px;
    width: calc(100% + 0.2rem);
    background-color: ${colors.secondary};
    display: block;
    position: absolute;
    bottom: 0;
    left: -0.1rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }

  &:hover::before {
    height: 25px;
    width: calc(100% + 1rem);
    left: -0.5rem;
    z-index: -1;
  }

  &:hover {
    color: black;
    cursor: pointer;
  }

  .button-link {
    &:hover {
      color: black;
    }
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
