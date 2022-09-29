import { createGlobalStyle } from "styled-components";

export const screen = {
  mobileS: `(min-width: 314px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  mobileXL: `(min-width: 525px)`,
  tablet: `(min-width: 768px)`,
  tabletM: `(min-width: 828px)`,
  laptopS: `(min-width: 1024px)`,
  laptopM: `(min-width: 1197px)`,
  laptopL: `(min-width: 1440px)`,
  laptopXL: `(min-width: 1920px)`,
  biggestScreen: `(min-width: 2560px)`,
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
  size11px: "11.2px",
  size12px: "12.8px",
  size16px: "16px",
  size18px: "18px",
  size19px: "19.2px",
  size20px: "20px",
  size21px: "21.12px",
  size22px: "22px",
  size25px: "25px",
  size31px: "31.24px",
  size39px: "39px",
};

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${colors.primary};
        color: ${colors.white};
        font-family: helvetica;
        box-sizing: border-box;
        margin: 0;
        z-index: 1;

        @media(min-width: 300px){
          width: 100%;
          overflow-x: visible ;
        }
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
