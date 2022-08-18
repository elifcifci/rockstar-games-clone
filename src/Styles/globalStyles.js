import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#0b0b0b",
  secondary: "#fcaf17",
  tertiary: "#e8e8e8",
  backgroundColor: "#0b0b0b",
  navbarBackground: "rgba(0,0,0,.85)",
  border: "#282828",
  cardBackground: "#000",
  text: "#fff",
};

export const fontSizes = {
  xxxs: "0.64rem",
  xxs: "0.8rem",
  xs: "1rem",
  s: "1.25rem,",
  m: "1.563rem",
  l: "1.953rem",
  xl: "2.441rem",
  xxl: "3.052rem",
  xxxl: "3.815rem",
  xxxxl: "4.768rem",
};

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${colors.primary};
        color: ${colors.text};
        font-family: helvetica;
        box-sizing: border-box;
    }

    a{
      text-decoration-line: none;
    }
    a:visited{
      color: white;
    }

    ul{
      list-style-type: none;
    }
`;

export default GlobalStyle;
