import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#0b0b0b",
  secondary: "#fcaf17",
  tertiary: "#e8e8e8",
  opacityColor: "rgba(232, 232, 232 ,0.7)",
  backgroundColor: "#0b0b0b",
  navbarBackground: "rgba(0,0,0,.85)",
  border: "#282828",
  cardBackground: "#000",
  text: "#fff",
};

export const fontSizes = {
  fontSize0: "0.70rem",
  fontSize1: "0.8rem",
  fontSize2: "1rem",
  fontSize3: "1.20rem",
  fontSize4: "1.32rem",
  fontSize5: "1.563rem",
  fontSize6: "1.953rem",
  fontSize7: "2.441rem",
  fontSize8: "3.052rem",
  fontSize9: "3.815rem",
  fontSize10: "4.768rem",
};

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${colors.backgroundColor};
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
