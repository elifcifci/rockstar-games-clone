import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#0b0b0b",
  secondary: "#fcaf17",
  tertiary: "#e8e8e8",
  navbarBackground: "rgba(0,0,0,.85)",
  border: "#282828",
  cardBackground: "#000",
  text: "#fff",
};

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${colors.primary};
        color: ${colors.text};
        font-family: helvetica;
    }
`;

export default GlobalStyle;
