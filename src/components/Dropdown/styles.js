//Styles
import styled from "styled-components";
import { screen, colors, fontSizes } from "../../styles/globalStyles";

export const DropdownCommonStyles = styled.div`
  cursor: pointer;
  height: max-content;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  .dropdown-list_last-item {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const StyledFooterDropdownContainer = styled(DropdownCommonStyles)`
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

  .dropdown-footer-languages {
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
  }

  .dropdown-list_item {
    padding: 12px 0 12px 16px;
    width: 100%;
    margin: 0;
    background: ${colors.black};

    &:hover {
      color: ${colors.black};
      background: ${colors.secondary};
    }
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

  @media ${screen.mobileL} {
    .dropdown-select-text {
      grid-template-columns: 5fr 1fr;
    }
  }

  @media ${screen.tablet} {
    .dropdown-select-text {
      padding: 0.5rem;
    }
    h4 {
      ${fontSizes.size18px};
    }
  }

  @media ${screen.laptopS} {
    .dropdown-footer-languages {
      right: 0;
    }
    .dropdown-list_item {
      ${fontSizes.size20px};
      padding: 15px 5px 15px 15px;
    }

    h4 {
      ${fontSizes.size20px};
    }
  }

  @media ${screen.laptopXL} {
    .dropdown-list_item {
      ${fontSizes.size22px};
      padding: 20px 15px 20px 20px;
    }

    h4 {
      ${fontSizes.size22px};
    }
  }
`;

export const StyledGamesDropdownContainer = styled(DropdownCommonStyles)`
  .games-dropdown-list {
    width: 100%;
    box-sizing: border-box;
    background-color: none;
    margin: 0;
    position: absolute;
    top: 0.5px;
    z-index: 2;
    padding-left: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .games-list_item {
    margin: 0;
    padding: 8px 16px;
    width: 100%;
    background-color: ${colors.black};
    box-sizing: border-box;
    font-size: 15px;
    color: ${colors.tertiary};

    &:hover {
      color: ${colors.black};
      background-color: ${colors.secondary};
    }
  }

  @media ${screen.mobileM} {
    .games-list_item {
      font-size: 16px;
    }
  }

  @media ${screen.tablet} {
    .games-list_item {
      font-size: ${fontSizes.size18px};
      padding: 9px 18px;
    }
  }

  @media ${screen.laptopS} {
    .games-list_item {
      font-size: ${fontSizes.size20px};
      padding: 10px 20px;
    }
  }

  @media ${screen.biggestScreen} {
    .games-list_item {
      font-size: ${fontSizes.size22px};
      padding: 11px 22px;
    }
  }
`;

export const dropdownAnimationConfig = {
  active: {
    color: colors.tertiary,
  },

  inactive: {
    color: "rgba(232, 232, 232, 0.8)",
  },
};
