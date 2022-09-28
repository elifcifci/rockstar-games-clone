import React from "react";
import { motion } from "framer-motion";

import { footerConstants } from "../../constants/footer";

//Components
import FooterDropdown from "../../components/Dropdown/FooterDropdown";
import SquareWithArrow from "../UI/SquareWithArrow";

//Styles
import {
  FooterContainer,
  ContactInWebsiteAndLanguagesContainer,
  ContactSocialMediaContainer,
  GeneralKnowledgeContainer,
  AboutCompanyContainer,
} from "./styles";
import { colors } from "../../styles/globalStyles";

function Footer() {
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
          {item.isIconVisible && <SquareWithArrow />}
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
          <FooterDropdown constants={footerConstants.languages} />
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

export default Footer;
