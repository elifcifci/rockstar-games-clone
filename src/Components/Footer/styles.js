//Styles
import styled from "styled-components";
import { screen, colors, fontSizes } from "../../styles/globalStyles";

export const StyledFooterContainer = styled.div`
  padding: 64px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};
  grid-row-gap: 4rem;

  .knowledge-and-language-section {
    display: grid;
    justify-content: space-between;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.2rem;
  }
  .knowledge-contact-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-row-gap: 1rem;
  }
  .knowledge-contact-item-link {
    color: ${colors.tertiary};
    display: inline-block;
    width: 100%;
  }

  .website-social-media-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
  }
  .website-contact-list {
    padding: 0;
    margin: 0;
    text-align: left;
    width: 100%;
    order: 2;
  }
  .website-contact-item {
    font-size: 10px;
    margin-bottom: 1rem;
  }
  .website-contact-item-link {
    color: ${colors.transparentTertiary};
    width: 100%;

    &:visited {
      color: ${colors.transparentTertiary};
    }
  }

  .social-media-list {
    order: 1;
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    padding: 0;
    justify-content: space-between;
  }
  .social-media-icon {
    width: 18px;
    height: 18px;
  }
  .social-media_path {
    scale: 0.75;
  }

  .company-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    font-weight: 700;
    row-gap: 0.6rem;
  }
  .company_item {
    font-size: ${fontSizes.size11px};
    margin: 0;
    display: flex;
    width: 220px;
    justify-content: center;
  }
  .company-city-list {
    display: flex;
    justify-content: center;
    column-gap: 0.7rem;
    width: 90%;
    padding: 10px 0 10px 0;
  }
  .company-city-item {
    font-size: ${fontSizes.size11px};
    width: auto;
  }

  @media${screen.mobileM} {
    .contact-and-language-section {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1.2rem;
    }

    .social-media-list {
      width: 280px;
    }
  }

  @media${screen.mobileL} {
    .company-section {
      row-gap: 0.5rem;
    }
  }

  @media${screen.tablet} {
    padding: 72px;
    margin-top: 0px;

    .website-social-media-section {
      flex-direction: row;
    }

    .social-media-list {
      justify-content: flex-end;
      column-gap: 2rem;
      order: 2;
      width: 100%;
    }
    .social-media-icon {
      width: 24px;
      height: 24px;
    }
    .social-media_path {
      scale: 1;
    }

    .knowledge-contact-item {
      ${fontSizes.size18px};
    }
    .knowledge-contact-list {
      display: flex;
      width: 330px;
      column-gap: 1rem;
    }

    .company-section {
      width: 100%;
      flex-direction: row;
    }
    .company_first-item {
      width: 125px;
      text-align: left;
    }
    .company_last-item {
      text-align: right;
      width: max-content;
    }
    .company_item {
      font-size: ${fontSizes.size12px};
      margin-bottom: 0px;
    }
    .company-city-item {
      font-size: ${fontSizes.size12px};
    }
  }

  @media ${screen.laptopS} {
    .website-contact-item {
      font-size: ${fontSizes.size12px};
    }
    .website-contact-list {
      order: 1;
      display: flex;
      column-gap: 1rem;
    }
    .website-contact-item_link {
      width: 100%;
    }
    .website-social-media-section {
      display: grid;
      grid-gap: 0;
      grid-template-columns: repeat(2, 1fr);
    }

    .knowledge-contact-item-link {
      font-size: ${fontSizes.size20px};
    }

    .company_item {
      font-size: ${fontSizes.size16px};
    }
    .company_first-item {
      width: 140px;
    }
    .company-city-item {
      font-size: ${fontSizes.size16px};
    }
  }

  @media ${screen.laptopXL} {
    .website-contact-list {
      width: max-content;
    }
    .website-contact-item {
      width: max-content;
      margin-right: 8px;
    }

    .knowledge-contact-item-link {
      ${fontSizes.size22px};
    }

    .website-contact-item-link {
      font-size: 14px;
    }
  }
`;
