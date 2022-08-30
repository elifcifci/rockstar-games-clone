import styled from "styled-components";
import { colors } from "../../Styles/globalStyles";

export const DropdownContainer = styled.div`
  cursor: pointer;

  .dropdown-select-text {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0 8px 8px 8px;
    border-bottom: 1px solid ${colors.text2};
  }
  .games-dropdown-title {
    color: ${colors.text};
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

  .dropdown-list {
    padding: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: none;
    width: 130px;
    position: absolute;
    right: 60px;
    margin: 0;
    z-index: 2;
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
    background-color: ${colors.cardBackground};
    width: 100%;
  }
  .dropdown-list_item {
    padding: 8px 16px 8px 16px;
    width: 100%;
    margin: 0;
    background-color: ${colors.backgroundColor};
  }

  .dropdown-list_last-item {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }


  .dropdown-list_first-item {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
