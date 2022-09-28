import { createGlobalStyle } from "styled-components";

export const screen = {
  mobileS: "(min-width: 314px)",
  mobileM: "(min-width: 375px)",
  mobileL: "(min-width: 425px)",
  mobileXL: "(min-width: 525px)",
  tablet: "(min-width: 768px)",
  tabletM: "(min-width: 828px)",
  laptopS: "(min-width: 1024px)",
  laptopM: "(min-width: 1197px)",
  laptopL: "(min-width: 1440px)",
  laptopXL: "(min-width: 1920px)",
  biggestScreen: "(min-width: 2560px)",
};

export const colors = {
  primary: "rgb(11, 11, 11)",
  secondary: "rgb(252, 175, 23)",
  tertiary: "rgb(232, 232, 232)",
  transparentTertiary: "rgba(232, 232, 232 ,0.7)",
  cardBorder: "rgb(40, 40, 40)",
  searchArea: "rgb(17, 17, 17)",
  inactiveButton: "rgb(102, 102, 102)",
  transparentColor: "rgb(0, 0, 0, 0)",
  navbarBorder: "rgb(22, 22, 22)",
  black: "rgb(0,0,0)",
  transparentBlack: "rgba(0,0,0,.7)",
  white: "rgb(255,255,255)",
};

export const fontSizes = {
  size1: "0.70rem",
  size2: "0.8rem",
  size3: "1rem",
  size4: "1.20rem",
  size5: "1.25rem",
  size6: "1.32rem",
  size7: "1.563rem",
  size8: "1.953rem",
  size9: "2.441rem",
  size10: "3.052rem",
  size11: "3.815rem",
  size12: "4.768rem",
};

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${colors.primary};
        color: ${colors.white};
        font-family: helvetica;
        box-sizing: border-box;
        margin: 0;
        z-index: 1;
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
