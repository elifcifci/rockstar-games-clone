import React from "react";
import { generalIcons } from "../../Constants/generalIcons";
import {
  ContactInWebsite,
  languages,
  contactSocialMedia,
  GeneralKnowledge,
  AboutCompany,
} from "../../Constants/footer";
import {
  Container,
  ContactInWebsiteAndLanguagesContainer,
  ContactSocialMediaContainer,
  GeneralKnowledgeContainer,
  AboutCompanyContainer,
} from "./styles";

export default function Footer() {
  let svgNeeds = [generalIcons[1].viewBox, generalIcons[1].path];

  let createContactPagesList = ContactInWebsite.map((item) => {
    return (
      <li className="contact-item" key={item.title}>
        <a href={item.link}>
          <span>{item.title}</span>
          {item.isIconVisible && (
            <svg className="contact-icon" viewBox={svgNeeds[0]}>
              <path d={svgNeeds[1]} />
            </svg>
          )}
        </a>
      </li>
    );
  });

  let createSocialMediaContact = contactSocialMedia.map((contact) => {
    return (
      <li className="contact-item" key={contact.title}>
        <a href={contact.link}>
          <svg className="contact-icon" viewBox={contact.viewBox}>
            <path d={contact.path} />
          </svg>
        </a>
      </li>
    );
  });

  let getOptions = languages.map((language) => {
    return (
      <option
        key={language.title}
        className="contact-select_options"
        value={language.title}
      >
        {language.language}
      </option>
    );
  });

  let createGeneralKnowledgeLinkList = GeneralKnowledge.map((knowledge) => {
    return (
      <li key={knowledge.title} className="contact-item">
        <a className="contact-item_link" href={knowledge.link}>
          {knowledge.title}
        </a>
      </li>
    );
  });

  let createCompanyCityList = AboutCompany.cities.map((city) => {
    return (
      <li key={city} className="company-city_item">
        {city}
      </li>
    );
  });

  return (
    <Container>
      <ContactInWebsiteAndLanguagesContainer>
        <ul className="contact-list">{createContactPagesList}</ul>
        <form className="select-container">
          <svg width="24" height="24" fill="none">
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM2 12h20"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10v0Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          <select className="contact-select">{getOptions}</select>
        </form>
      </ContactInWebsiteAndLanguagesContainer>

      {/* social media links starts*/}
      <ContactSocialMediaContainer>
        <ul className="contact-list">{createSocialMediaContact}</ul>
      </ContactSocialMediaContainer>
      {/* social media links ends*/}

      {/* knowledge links part starts*/}
      <GeneralKnowledgeContainer>
        <ul className="contact-list">{createGeneralKnowledgeLinkList}</ul>
      </GeneralKnowledgeContainer>
      {/* knowledge links part ends*/}

      {/* company knowledge part starts*/}
      <AboutCompanyContainer>
        <ul className="about-company-list">
          <li className="about-company_item">{AboutCompany.companyName}</li>
          <li className="about-company_item">
            <ul className="company-city-list">{createCompanyCityList}</ul>
          </li>
          <li className="about-company_item">{AboutCompany.foundationYear}</li>
        </ul>
      </AboutCompanyContainer>
            {/* company knowledge part starts*/}
    </Container>
  );
}
