import styled from "styled-components";
import {colors, fontSizes} from "../../Styles/globalStyles"
export const Container = styled.div``;

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
  top: 74px;
  right: 30px;
  box-shadow: 0 10px 30px rgb(0 0 0 / 50%);
  background: ${colors.backgroundColor};
  z-index: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;


  .account-list{
    padding: 0;
    margin-top : 0;
  }
  .account-list--border{
    border-bottom: 1px solid ${colors.opacityColor};
    border-bottom: 1px solid hsla(0,0%,85%,.1)
}
  .account-list_item{
    opacity: 0.8;
    padding: 18px 32px 18px 32px;
    font-size: ${fontSizes.fontSize2}
  }
`;
