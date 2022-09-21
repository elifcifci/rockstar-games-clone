import styled from "styled-components";
import { motion } from "framer-motion";

export const HamburgerMenuContainer = styled(motion.div)`
  position: relative;
  top: 0;
  z-index: 3;
  display: flex;
  grid-gap: 1rem;
  align-items: center;
`;
