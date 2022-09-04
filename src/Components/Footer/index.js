import React from "react";
import { generalIcons } from "../../Constants/generalIcons";
import {
  FooterContainer,
  ContactInWebsiteAndLanguagesContainer,
  ContactSocialMediaContainer,
  GeneralKnowledgeContainer,
  AboutCompanyContainer,
} from "./styles";
import { motion } from "framer-motion";
import { footerConstants } from "../../Constants/footer";
import Dropdown from "../../Components/Dropdown";
import { colors } from "../../Styles/globalStyles";

export default function Footer() {
  let svgNeeds = [generalIcons[1].viewBox, generalIcons[1].path];

  let createContactPagesList = footerConstants.contactInWebsite.map((item) => {
    return (
      <li className="contact-item" key={item.title}>
        <motion.a
          className="contact-item-link"
          initial={{ color: colors.white }}
          whileHover={{ color: colors.secondary }}
          href={item.link}
        >
          {item.title}
          {item.isIconVisible && (
            <svg className="contact-item-icon" viewBox={svgNeeds[0]}>
              <path d={svgNeeds[1]} />
            </svg>
          )}
        </motion.a>
      </li>
    );
  });

  let createSocialMediaLinks = footerConstants.contactSocialMedia.map(
    (contact) => {
      return (
        <li className="contact-item" key={contact.title}>
          <a href={contact.link} title={contact.title}>
            <motion.svg
              className="contact-item-icon"
              initial={{ fill: colors.white }}
              whileHover={{ fill: colors.secondary }}
            >
              <path className="contact-item-path" d={contact.path} />

              {contact.title === "instagram" && (
                <path className="contact-item-path" d={contact.path2} />
              )}
            </motion.svg>
          </a>
        </li>
      );
    }
  );

  let createGeneralKnowledgeLinks = footerConstants.generalKnowledge.map(
    (knowledge) => {
      return (
        <li key={knowledge.title} className="contact-item">
          <motion.a
            className="contact-item_link"
            whileHover={{ color: colors.secondary }}
            href={knowledge.link}
          >
            {knowledge.title}
          </motion.a>
        </li>
      );
    }
  );

  let createCompanyCityList = footerConstants.aboutCompany.cities.map(
    (city) => {
      return (
        <li key={city} className="company-city_item">
          {city}
        </li>
      );
    }
  );

  return (
    <FooterContainer title="footer">
      <ContactInWebsiteAndLanguagesContainer>
        <ul className="contact-list">{createContactPagesList}</ul>
        <form className="select-container">
          <svg className="select-world-icon" fill="none">
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
          {/* <select className="contact-select">{getOptions}</select> */}
          <Dropdown constants={footerConstants.languages} isForFooter={true} />
        </form>
      </ContactInWebsiteAndLanguagesContainer>

      <section>
        {/* knowledge links part starts*/}
        <GeneralKnowledgeContainer>
          <ul className="contact-list">{createGeneralKnowledgeLinks}</ul>
        </GeneralKnowledgeContainer>
        {/* knowledge links part ends*/}
        
        {/* social media links starts*/}
        <ContactSocialMediaContainer>
          <ul className="contact-list">{createSocialMediaLinks}</ul>
        </ContactSocialMediaContainer>
        {/* social media links ends*/}
      </section>

      {/* company knowledge part starts*/}
      <AboutCompanyContainer>
        <ul className="about-company-list">
          <li className="about-company_item">
            {footerConstants.aboutCompany.companyName}
          </li>
          <li className="about-company_item city-list-container">
            <ul className="company-city-list">{createCompanyCityList}</ul>
          </li>
          <li className="about-company_item about-company_last-item">
            {footerConstants.aboutCompany.foundationYear}
          </li>
        </ul>
      </AboutCompanyContainer>
      {/* company knowledge part starts*/}
    </FooterContainer>
  );
}
