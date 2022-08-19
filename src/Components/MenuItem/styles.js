import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
background-color: ${colors.primary};
position: absolute;
top: 70px;
left: 0;
bottom: 0;
width: 300px;
display: flex;
flex-direction: column;
align-item: center;


.list-item{
  font-size: ${fontSizes.fontSize5};
  line-height: 3.3rem;
  font-weight: bold;
}
.list-icon{
    fill: white;
    margin-left: 7px;
    width: 10px;
}
}
`;
export const MenuForm = styled(motion.form)`
display: flex;
justify-content: center;
margin: 40px;

svg{
  cursor: pointer;
  padding: 15px 0 15px 10px;
}
.searchArea{
  background-color: transparent;
  color: ${colors.text};
  font-size: ${fontSizes.fontSize3};
  border: none;
  width: 90%;
  padding-left: 15px;  
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
