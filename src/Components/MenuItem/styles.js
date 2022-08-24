import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  .menu-list {
    padding-left: 0;
    width: 80%;
    margin-top: 30px;
  }

  .list-item {
    font-size: ${fontSizes.fontSize5};
    width: 100%;
    height: 60px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .list-link {
    width: 100%;
    height: 100%;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
  }

  .list_icon {
    fill: white;
    margin-left: 7px;
    width: 10px;
  }
`;

export const MenuForm = styled(motion.form)`
display: flex;
justify-content: center;
margin-top: 82px;
width: 80%;
background-color: ${colors.border};
border-radius: 4px;

svg{
  cursor: pointer;
  padding: 15px 0 15px 10px;
}
.searchArea{
  background-color: ${colors.border};
  color: ${colors.text};
  font-size: ${fontSizes.fontSize3};
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 0 5px 0 15px;  
  outline: none;
    
  ::placeholder {
    color: ${colors.opacityColor};
    font-size: ${fontSizes.fontSize2};
  }
`;
export const NavbarMenuConfig = {
  open: {
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.2,
    },
  },
  closed: {
    x: -300,
    y: 0,
    transition: {
      type: "tween",
    },
  },
};
