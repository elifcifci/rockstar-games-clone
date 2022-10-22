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
    stroke: "rgba(232, 232, 232, 0.8)",
    color: "rgba(232, 232, 232, 0.8)",
  },
};

export const StyledWorldIconContainer = styled(motion.svg)`
  width: 24px;
  height: 24px;
  fill: none;
  stroke-width: 2;
  scale: 0.9;
`;
