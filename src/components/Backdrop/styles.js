import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { colors } from "../../styles/globalStyles";

export const StyledBackdropContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
`;

export const BackDropConfig = {
  open: {
    background: colors.transparentBlack,
    display: "initial",
    transition: {
      type: "spring",
      damping: 30,
      delay: 0.2,
    },
  },
  colorChange: {
    opacity: 0,
    background: colors.transparentColor,

    transition: {
      type: "tween",
      damping: 30,
      delay: 0.2,
    },
  },

  closed: {
    display: "none",
    transition: {
      delay: 1,
    },
  },
};
