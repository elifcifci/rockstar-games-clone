import React from "react";
import { motion } from "framer-motion";

import { footerConstants } from "../../constants/footer";

//Components
import FooterDropdown from "../../components/Dropdown/FooterDropdown";
import SquareWithArrow from "../UI/SquareWithArrow";

//Styles
import { StyledFooterContainer } from "./styles";
import { colors } from "../../styles/globalStyles";

function Footer() {
  const createLanguageContainerAndKnowledgeList = (constants, classNameTag) => {
    return (
      <ul className={`${classNameTag}-contact-list`}>
        {constants.map((item) => {
          return (
            <li className={`${classNameTag}-contact-item`} key={item.title}>
              <motion.a
                className={`${classNameTag}-contact-item-link`}
                whileHover={{ color: colors.secondary }}
                href={item.link}
              >
                {item.title}
                {item.isIconVisible && <SquareWithArrow />}
              </motion.a>
            </li>
          );
        })}
      </ul>
    );
  };

  let createSocialMediaAndCityList = (
    constants,
    isSocialMedia,
    classNameTag
  ) => {
    return (
      <ul
        className={`${classNameTag}-list ${!isSocialMedia && "company_item"}`}
      >
        {constants.map((item) => {
          return (
            <li
              className={`${classNameTag}-item`}
              key={isSocialMedia ? item.title : item}
            >
              {isSocialMedia ? (
                <a href={item.link} title={item.title}>
                  <motion.svg
                    className={`${classNameTag}-icon`}
                    initial={{ fill: colors.white }}
                    whileHover={{ fill: colors.secondary }}
                  >
                    <path className={`${classNameTag}_path`} d={item.path} />

                    {item.title === "instagram" && (
                      <path className={`${classNameTag}_path`} d={item.path2} />
                    )}
                  </motion.svg>
                </a>
              ) : (
                item
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <StyledFooterContainer title="footer">
      <section className="knowledge-and-language-section">
        {createLanguageContainerAndKnowledgeList(
          footerConstants.contactInWebsite,
          "knowledge"
        )}
        <FooterDropdown constants={footerConstants.languages} />
      </section>

      <section className="website-social-media-section">
        {createLanguageContainerAndKnowledgeList(
          footerConstants.generalKnowledge,
          "website"
        )}
        {createSocialMediaAndCityList(
          footerConstants.contactSocialMedia,
          true,
          "social-media"
        )}
      </section>

      <section className="company-section">
        <p className="company_item company_first-item">
          {footerConstants.aboutCompany.companyName}
        </p>

        {createSocialMediaAndCityList(
          footerConstants.aboutCompany.cities,
          false,
          "company-city"
        )}

        <p className="company_item company_last-item">
          {footerConstants.aboutCompany.foundationYear}
        </p>
      </section>
    </StyledFooterContainer>
  );
}

export default Footer;
