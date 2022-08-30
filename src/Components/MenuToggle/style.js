import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
position: relative;
z-index: 3; 
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    width: auto;
    height: 50px;
    border-radius: 50%;
    background: transparent;
`
export const IconParts = styled(motion.div)`
    width: 24px;
    height: 2px;
    margin-bottom: 6px; 
    border-radius: 1px;
    background-color: white;

  `