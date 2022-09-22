import styled from "styled-components";
import {motion} from "framer-motion";

export const BackDropContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;