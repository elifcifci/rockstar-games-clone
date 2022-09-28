//Styles
import styled from "styled-components";
import { screen, colors } from "../../styles/globalStyles";

export const DropdownContainer = styled.div`
  cursor: pointer;
  height: max-content;
  width: 100%;
  box-sizing: border-box;

  .dropdown-list_last-item {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const FooterDropdownContainer = styled(DropdownContainer)`
  position: relative;

  .footer-dropdown-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-gap: 0.2rem;
  }

  h4 {
    margin: 0;
    font-weight: normal;
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

export const FooterLanguageContainer = styled.div`
  padding: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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

  .dropdown_language {
    width: 100%;
    padding: 12px 0 12px 16px;
    boz-sizing: border-box;
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

export const DropdownListItems = styled.p`
  background: ${colors.black};

  &:hover {
    color: ${colors.black};
    background: ${colors.secondary};
  }
`;

export const GamesDropdownContainer = styled(DropdownContainer)`
  position: relative;
    color: ${colors.white};
  }
  
  
  .games-dropdown-list {
    width: 100%;
    box-sizing: border-box;

    top: 0px;
    position: absolute;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: none;
    margin: 0;
    z-index: 2;
    padding-left: 0;
  }
`;

export const GamesDropdownListItem = styled(DropdownListItems)`
  margin: 0;
  padding: 8px 16px 8px 16px;
`;
