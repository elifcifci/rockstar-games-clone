import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";

export const Container = styled.div`
  height: 100vh;
  margin-top: 32px;
  padding: 64px 20px 50px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.cardBackground};

`;

export const ContactInWebsiteAndLanguagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 0;

  .contact-list {
    list-style-type: none;
    padding: 0 0 20px 0;
    margin: 0;
  }

  .contact-item {
    color: white;
    margin: 0 0 24px 0;
  }

  .contact-icon {
    fill: white;
    margin-left: 7px;
    width: 10px;
  }

  .select-container {
    display: flex;
    align-items: start;
    outline: none;
  }

  .contact-select {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
    font-size: 16px;
    width: 80%;

  }

  .contact-select_options {
    background-color: ${colors.backgroundColor};
    border: 1px solid ${colors.backgroundColor};

    $:hover {
      background-color: ${colors.secondary};
    }
  }
`;

export const ContactSocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .contact-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .contact-item {
    width: 14px;
  }

  .contact-icon {
    fill: white;
  }
`;

export const GeneralKnowledgeContainer = styled.div`
  text-align: left;
  width: 100%;

  .contact-list {
    padding: 0;
  }

  .contact-item {
    font-size: ${fontSizes.fontSize0};
    margin-bottom: 18px;
  }

  .contact-item_link {
    color: ${colors.opacityColor};
  }
`;

export const AboutCompanyContainer = styled.div`
  font-size: ${fontSizes.fontSize1};
  display: flex;
  width: 100%;
  justify-content: space-around;

  .about-company-list {
    width: 100%;
    padding: 0;
    text-align: center;
    font-size: ${fontSizes.fontSize0};
    font-weight: 700;
  }

  .about-company_item {
    font-size: ${fontSizes.fontSize0};
    margin-bottom: 18px;
    width: 100%;
  }

  .company-city-list {
    display: flex;
    width: 100%;
    padding: 10px;
  }

  .company-city_item {
    font-size: ${fontSizes.fontSize0};
    width: 100%;
  }
`;
