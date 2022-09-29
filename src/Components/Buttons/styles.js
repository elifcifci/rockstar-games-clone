import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { screen, colors, fontSizes } from "../../styles/globalStyles";

export const StyledAnimatedButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .link-text {
    color: white;
    position: relative;
    line-height: 25px;
    z-index: 1;
    margin: 0;

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
  }

  .button-link {
    &:visited {
      color: white;
    }
    &:hover {
      color: black;
    }
  }

  @media ${screen.tablet} {
    .link-text {
      font-size: ${fontSizes.size19px};
    }
  }
`;

export const SliderWatchButton = styled(motion.button)`
  font-size: ${fontSizes.size16px};
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
    font-size: ${fontSizes.size19px};
  }

  @media ${screen.laptopS} {
    margin-bottom: 0;
    font-weight: 700;
    padding: 20px 0px;
    max-width: 250px;
    height: 62px;
  }

  @media${screen.biggestScreen} {
    font-size: ${fontSizes.size21px};
    padding: 22px 0px;
    height: auto;
  }
`;

export const StyledButtonContainer = styled(motion.div)`
  padding: 0;
  display: flex;
  padding: 0 2rem;
  box-sizing: border-box;

  .button-label {
    height: 20px;
    cursor: pointer;
    width: 1.5rem;
    margin-right: 8px;
  }

  .slider_button {
    display: inline-block;
    background-color: ${colors.inactiveButton};
    margin-right: 8px;
    height: 2px;
    width: 1.5rem;
    border-radius: 2px;
    outline: none;
  }

  .active-slider_button {
    background-color: white;
  }

  @media${screen.tablet} {
    margin-bottom: 4rem;

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

  @media${screen.laptopM} {
    margin: 0;
    padding: 0;
  }

  @media${screen.laptopXL} {
    align-items: flex-end;

    .button-label {
      width: 5.5rem;
    }

    .slider_button {
      width: 5.5rem;
    }
  }
`;
