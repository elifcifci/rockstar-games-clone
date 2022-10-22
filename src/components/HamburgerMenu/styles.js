import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { screen, fontSizes } from "../../styles/globalStyles";

export const StyledHamburgerMenuContainer = styled(motion.div)`
  position: relative;
  top: 0;
  z-index: 3;
  display: flex;
  grid-gap: 1rem;
  align-items: center;

  .page-title {
    ${fontSizes.size16px};
  }

  @media ${screen.tablet} {
    .page-title {
      ${fontSizes.size18px};
    }
  }

  @media ${screen.laptopS} {
    .page-title {
      ${fontSizes.size20px};
    }
  }

  @media ${screen.laptopXL} {
    .page-title {
      ${fontSizes.size22px};
    }
  }
`;
