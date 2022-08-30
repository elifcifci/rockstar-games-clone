import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../Styles/globalStyles";

export const Container = styled(motion.nav)`
  width: 100%;
  height: 60px;
  border-bottom: solid 2px ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  position: relative;
  top: 0;
  z-index: 3;

  .inner-container {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 74px 1fr;
  }

  .page-icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 15%;
    width: 35px;
    position: relative;
    z-index: 3;
  }
`;
