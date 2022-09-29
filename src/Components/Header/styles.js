import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { colors, screen } from "../../styles/globalStyles";

export const StyledHeaderContainer = styled(motion.nav)`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: ${colors.black};
  z-index: 6;

  .header-inner-container {
    height: 60px;
    width: 100%;
    position: relative;
    top: 0;
    z-index: 6;
    display: flex;
    padding: 6px 32px 6px 32px;
    justify-content: space-between;
    box-sizing: border-box;

    background-color: ${colors.black};
    border-bottom: solid 2px ${colors.navbarBorder};
  }

  @media ${screen.tablet} {
    .header-inner-container {
      padding: 6px  4.5rem 6px  4.5rem;
  }

  @media ${screen.laptopS} {
    .header-inner-container {
      padding: 6px  5rem 6px  5rem;
  }

  @media ${screen.laptopXL} {
    .header-inner-container {
      padding: 6px 5.5rem 6px 5.5rem;
  }
`;

export const NavbarVisibilityConfig = {
  initial: {
    position: "fixed",

    y: 0,
    transition: {
      type: "tween",
    },
  },
  animated: {
    position: "fixed",

    y: -65,
    transition: {
      type: "tween",
    },
  },
};
