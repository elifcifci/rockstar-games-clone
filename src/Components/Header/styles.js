import styled from "styled-components";
import {motion } from "framer-motion";
import {colors} from "../../Styles/globalStyles"

export const Container = styled(motion.nav)`
width: 100%;
height: 60px;
border-bottom: solid 2px ${colors.border};
display: flex;
justify-content: space-around;
align-items: center;
background-color:  ${colors.backgroundColor};
position: relative;
top: 0;
z-index: 3;

img{
border-radius: 15%;
width: 35px;
position: relative;
z-index: 3;
}
`


