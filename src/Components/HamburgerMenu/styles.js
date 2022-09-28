import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { screen } from "../../styles/globalStyles";

export const HamburgerMenuContainer = styled(motion.div)`
  position: relative;
  top: 0;
  z-index: 3;
  display: flex;
  grid-gap: 1rem;
  align-items: center;

  .page-title {
    font-size: 16px;
  }

  @media${screen.tablet} {
    .page-title {
      font-size: 18px;
    }
  }

  @media${screen.laptopS} {
    .page-title {
      font-size: 20px;
    }
  }

  @media${screen.laptopXL} {
    .page-title {
      font-size: 22px;
    }
  }
`;
