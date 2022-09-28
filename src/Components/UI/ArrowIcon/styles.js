import styled from "styled-components";
import { motion } from "framer-motion";

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

export const ArrowIconContainer = styled(motion.svg)`
  width: 32px;
  height: 24px;
  fill: none;

  .dropdown-arrow-path {
    stroke: #fff;
    stroke-width: 2;
    stroke-line-cap: round;
    stroke-line-join: round;
  }
`;
