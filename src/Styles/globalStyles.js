import { createGlobalStyle } from "styled-components";

export const screen = {
  mobileS:"(min-width: 314px)",
  mobileM: "(min-width: 375px)",
  mobileL: "(min-width: 425px)",
  mobileXL: "(min-width: 525px)",
  tablet: "(min-width: 768px)",
  laptop: "(min-width: 1024px)",
  laptopL: "(min-width: 1440px)",
  laptopXL: "(min-width: 1920px)",

};

export const colors = {
  primary: "rgb(11, 11, 11)",
  secondary: "rgb(252, 175, 23)",
  tertiary: "rgb(232, 232, 232)",
  opacityColor: "rgba(232, 232, 232 ,0.7)",
  navbarBackground: "rgba(0,0,0,.85)",
  gray: "rgb(40, 40, 40)",
  black: "rgb(0,0,0)",
  white: "rgb(255,255,255)",
  inactive: "rgb(102, 102, 102)"
};

export const fontSizes = {
  size0:"0.64rem",
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
