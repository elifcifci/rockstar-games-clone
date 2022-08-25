import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../Styles/globalStyles";

export const NewswireButtonContainer = styled(motion.a)`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .link-text {
    z-index: 2;
    margin: 0 0 3px 0;
  }
`;

export const NewswireButton = styled(motion.button)`
  background-color: transparent;
  border: none;
  color: white;
  z-index: 2;
  margin: 0 0 3px 0;
`;

export const NewswirePageLinkAnimate = styled(motion.div)`
  background-color: ${colors.secondary};
  width: 75px;
  height: 4px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
`;
