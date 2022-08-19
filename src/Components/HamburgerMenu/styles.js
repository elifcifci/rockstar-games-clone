import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`

  .background {
    position: absolute;
    top: 60;
    left: 0;
    bottom: 0;
    width: 300px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


`;