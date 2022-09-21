import styled from "styled-components";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";
import { motion } from "framer-motion";

export const MenuItemContainer = styled(motion.div)`
  padding: 0;
  background-color: ${colors.black};
  position: fixed;
  grid-row: 2rem;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  grid-gap: 2rem;
  height: 100vh;
  width: 100%;
  z-index: 2;
  box-sizing: border-box;

  .menu-list {
    padding-left: 0;
    margin: 0;
    padding: 0 2rem;
    display: block;
  }

  .list-item {
    font-size: ${fontSizes.size7};
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
    color: ${colors.white};
    display: flex;
    align-items: center;
  }

  .active-page {
    color: ${colors.secondary};
  }

  .list_icon {
    fill: white;
    margin-left: 7px;
    width: 10px;
  }
`;

export const MenuSearchInput = styled(motion.form)`
display: flex;
justify-content: center;
margin: 82px 2rem 0 2rem;
background-color: ${colors.darkerGray};
border-radius: 4px;
box-sizing: border: box;

svg{
  cursor: pointer;
  padding: 15px 0 15px 10px;
}
.searchArea{
  background-color: ${colors.darkerGray};
  color: ${colors.white};
  font-size: ${fontSizes.size4};
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 0 5px 0 15px;  
  outline: none;
    
  ::placeholder {
    color: ${colors.opacityColor};
    font-size: ${fontSizes.size3};
  }
`;
