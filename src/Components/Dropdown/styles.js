import styled from "styled-components";
import { screen, colors } from "../../Styles/globalStyles";

export const DropdownContainer = styled.div`
  cursor: pointer;

  .games-dropdown-title {
    color: ${colors.white};
  }

  .games-dropdown-list {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: none;
    width: 80px;
    position: absolute;
    margin: 0;
    z-index: 2;
    padding-left: 0;
  }

  .games-list_item {
    margin: 0;
    padding: 8px 16px 8px 16px;
    background-color: ${colors.black};
    width: 100%;
  }
`;

export const FooterDropdownContainer = styled.div`
  position: relative;

  .dropdown-select-text {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0 8px 8px 8px;
    border-bottom: 1px solid ${colors.tertiary};
  }

  .dropdown-footer {
    border: none;
  }

  h4 {
    margin: 0;
    font-weight: normal;
  }

  .dropdown-title {
    color: ${colors.opacityColor};
  }

  @media${screen.mobileL} {
    .dropdown-select-text {
      grid-template-columns: 5fr 1fr;
    }
  }

  @media${screen.tablet} {
    .dropdown-select-text {
      padding: 0.5rem;
    }
  }
`;

export const FooterDropdownInnerContainer = styled.div`
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: none;
  position: absolute;
  right: 20px;
  bottom: calc(100% + 4px);
  margin: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: max-content;

  .dropdown-list_item {
    padding: 12px 0 12px 16px;
    width: 100%;
    margin: 0;
    background-color: ${colors.primary};
  }

  .dropdown-list_last-item {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .dropdown-list_first-item {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media${screen.laptopS} {
    right: 0px;

    .dropdown-list_item {
      font-size: 20px;
      padding: 15px 5px 15px 15px;
    }
  }

  @media${screen.laptopXL} {
    right: 0px;

    .dropdown-list_item {
      font-size: 22px;
      padding: 20px 15px 20px 20px;
    }
  }
`;
