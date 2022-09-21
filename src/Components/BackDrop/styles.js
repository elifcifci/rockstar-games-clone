import styled, { keyframes } from "styled-components";
import { screen, colors } from "../../Styles/globalStyles";

const navbarBackgroundAnimation = keyframes`
to {background-color: ${colors.opacityColor2};}
`;

export const BackDropContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${navbarBackgroundAnimation} linear 1s;
`;