import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../Styles/globalStyles";

export const HeaderContainer = styled(motion.nav)`
  width: 100%;
  height: 60px;
  border-bottom: solid 2px ${colors.navbarBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  position: relative;
  top: 0;
  z-index: 3;

  .header-inner-container {
    padding: 12px 32px 12px 32px;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 74px 1fr;
  }

  .page-icon-link {
    display: flex;
    justify-content: center;

  }
  .page-icon{
    border-radius: 15%;
    width: 40px;
    height: 100%;
    position: relative;
    z-index: 3;
  }
`;
