import { motion } from "framer-motion";

//Styles
import styled from "styled-components";
import { colors } from "../../../styles/globalStyles";

export const iconAnimationConfig = {
  active: {
    stroke: colors.white,
    color: colors.white,
  },

  inactive: {
    stroke: colors.transparentTertiary,
    color: colors.transparentTertiary,
  },
};

export const StyledWorldIconContainer = styled(motion.svg)`
  width: 24px;
  height: 24px;
  fill: none;
  stroke-width: 2;
  scale: 0.9;
`;
