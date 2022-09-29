import styled from "styled-components";
import { motion } from "framer-motion";
import { screen } from "../../../styles/globalStyles";

export const iconAnimationConfig = {
  open: {
    rotate: 180,
    transition: { type: "teen" },
  },

  close: {
    rotate: 0,
    transition: { type: "teen" },
  },
};

export const StyledArrowIconContainer = styled(motion.svg)`
  width: 30px;
  height: 24px;
  fill: none;

  .dropdown-arrow-path {
    stroke: #fff;
    stroke-width: 2;
    stroke-line-cap: round;
    stroke-line-join: round;
  }

  @media${screen.mobileS} {
    width: 26px;
  }
`;
