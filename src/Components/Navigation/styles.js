import styled from "styled-components";
import {motion } from "framer-motion";
import {colors} from "../../Styles/globalStyles"

export const Container = styled(motion.nav)`
width: 100%;
height: 60px;
border-bottom: solid 2px ${colors.border};
`