import styled from "styled-components";

export const AccountIconContainer = styled.svg`
  width: 36px;
  height: 36px;
  enable-background: new 0 0 48 48;
  cursor: pointer;

  .svgCircle {
    opacity: 0.1;
    fill-rule: evenodd;
    clip-rule: evenodd;
    fill: #fff;
  }

  .svgUse1 {
    overflow: visible;
    fill: #fff;
  }

  .svgUse2 {
    overflow: visible;
  }

  .svgPath {
    clip-path: url(#b);
    fill: #fff;
  }
`;
