import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  top: 0;
  z-index: 3;
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  
  .background {
    width: 300px;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
