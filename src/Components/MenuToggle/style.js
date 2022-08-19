import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`

    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    z-index: 9
  
`
export const IconParts = styled(motion.div)`
    width: 24px;
    height: 2px;
    margin-bottom: 5px; 
    border-radius: 1px;
    background-color: white;

  `