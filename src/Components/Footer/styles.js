import styled from "styled-components";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

export const FooterContainer = styled.div`
  margin-top: 32px;
  padding: 64px 30px 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};
  grid-row-gap: 4rem;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
  }
  @media${screen.tablet} {
    padding: 72px;
    margin-top: 0px;

    section {
      flex-direction: row;
    }
  }
  @media${screen.laptop} {
    section {
      display: grid;
      grid-gap: 0;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const ContactInWebsiteAndLanguagesContainer = styled.div`
  display: grid;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  grid-row-gap: 4rem;

  .contact-list {
    font-weight: bold;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-row-gap: 1.5rem;
  }

  .contact-item {
    color: white;
    width: 100%;
  }

  .contact-item-link {
    display: inline-block;
    color: white;
    width: 100%;
  }

  .contact-item-icon {
    fill: white;
    margin-left: 7px;
    width: 10px;
  }

  .select-container {
    display: flex;
  }

  .select-world-icon {
    width: 30px;
    height: 24px;
    fill: none;
  }

  .dropdown-footer {
    display: flex;
    align-items: center;
    grid-gap: 0.7rem;
  }

  .contact-select {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
    font-size: 16px;
    width: 80%;
    outline: none;
  }

  .contact-select_options {
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    outline: none;

    $:hover {
      background-color: ${colors.secondary};
    }
  }

  @media ${screen.mobileS} {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.2rem;

    .select-container {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media ${screen.tablet} {
    .contact-item {
      font-size: 18px;
    }
    .contact-list {
      display: flex;
      width: 330px;
    }
  }

  @media ${screen.laptop} {
    .contact-item {
      width: 100%;
      font-size: 20px;
    }

    .contact-list {
      width: 350px;
    }
  }

  @media ${screen.laptopXL} {
    .contact-item {
      font-size: 22px;
    }

    .contact-list {
      width: 375px;
    }
  }
`;

export const GeneralKnowledgeContainer = styled.div`
  text-align: left;
  width: 100%;
  order: 2;

  .contact-list {
    padding: 0;
    margin: 0;
  }

  .contact-item {
    font-size: ${fontSizes.size1};
    margin-bottom: 1.5rem;
  }

  .contact-item_link {
    color: ${colors.opacityColor};
    width: 100%;
  }

  @media ${screen.laptop} {
    order: 1;

    .contact-item {
      font-size: ${fontSizes.size2};
    }
    .contact-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
    }
    .contact-item_link {
      width: 100%;
    }
  }
`;

export const ContactSocialMediaContainer = styled.div`
  order: 1;
  display: flex;
  width: 100%;
  padding: 0;

  .contact-list {
    margin: 0;
    width: 220px;
    display: flex;
    padding: 0;
    justify-content: space-between;
  }

  .contact-item-icon {
    width: 18px;
    height: 18px;
  }
  .contact-item-path {
    scale: 0.75;
  }

  @media${screen.tablet} {
    justify-content: flex-end;
    order: 2;

    .contact-item-icon {
      width: 24px;
      height: 24px;
    }
    .contact-list {
      width: 280px;
    }

    .contact-item-path {
      scale: 1;
    }
  }
`;

export const AboutCompanyContainer = styled.div`
  font-size: ${fontSizes.size2};
  width: 100%;

  .about-company-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    font-size: ${fontSizes.size1};
    font-weight: 700;
  }

  .about-company_item {
    font-size: ${fontSizes.size1};
    margin-bottom: 18px;
  }
  .city-list-container {
    display: flex;
    width: 220px;
    justify-content: center;
  }
  .company-city-list {
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 10px 0 10px 0;
  }

  .company-city_item {
    font-size: ${fontSizes.size1};
    width: auto;
  }

  @media${screen.tablet} {
    width: 100%;

    .about-company-list {
      display: grid;
      justify-items: flex-start;
      grid-template-columns: repeat(3, 1fr);
    }

    .about-company_last-item {
      text-align: right;
      width: 100%;
    }

    .company-city-list {
      width: 100%;
    }
    .about-company_item {
      font-size: ${fontSizes.size2};

      margin-bottom: 0px;
    }
    .company-city_item {
      font-size: ${fontSizes.size2};
    }
  }
`;
