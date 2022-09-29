//Styles
import styled from "styled-components";
import { colors, fontSizes } from "../../styles/globalStyles";

export const StyledAccountContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .account-list {
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
    padding: 0;
    margin-top: 0;
  }
  .account-list-border {
    border-bottom: 1px solid ${colors.transparentTertiary};
    border-bottom: 1px solid hsla(0, 0%, 85%, 0.1);
  }
  .account-list_item {
    opacity: 0.8;
    font-size: ${fontSizes.size3};
    padding: 1rem 2rem;
  }
`;
