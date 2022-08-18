import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";

export const Container = styled.div`
  height: 100vh;
  padding: 50px 20px 50px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContactInWebsiteAndLanguagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 30px 0 0 0;

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
  width: 80%;

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
  width: 80%;

  .contact-list {
    padding: 0;
  }

  .contact-item {
    font-size: ${fontSizes.xxxs};
    margin-bottom: 18px;
  }

  .contact-item_link {
    color: ${colors.tertiary};
    opacity: 0.65;
  }
`;

export const AboutCompanyContainer = styled.div`
  font-size: ${fontSizes.xxs};
  width: 100%;

  .about-company-list {
    width: 100%;
    padding: 0;
    text-align: center;
    font-size: ${fontSizes.xxxs};
    font-weight: 700;
  }

  .about-company_item {
    font-size: ${fontSizes.xxxs};
    margin-bottom: 18px;
    width: 100%;
  }

  .company-city-list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0;
  }

  .company-city_item {
    font-size: ${fontSizes.xxxs};
    width: 100%;
  }
`;
