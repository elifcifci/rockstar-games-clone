import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";

export const Container = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AccountIcon = styled.svg`
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

export const AccountContainer = styled.div`
  position: absolute;
  top: 57px;
  right: 0px;
  box-shadow: 0 10px 30px rgb(0 0 0 / 50%);
  background: ${colors.primary};
  z-index: 2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 200px;
  padding-top: 5px;

  .account-list {
    padding: 0;
    margin-top: 0;
    background: ${colors.primary};
    width: 100%;
  }
  .account-list--border {
    border-bottom: 1px solid ${colors.opacityColor};
    border-bottom: 1px solid hsla(0, 0%, 85%, 0.1);
  }
  .account-list_item {
    opacity: 0.8;
    font-size: ${fontSizes.size3};
    padding: 1rem 2rem;
  }
`;
