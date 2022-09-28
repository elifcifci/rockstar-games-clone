import React, { useState } from "react";
import { motion } from "framer-motion";

//Components
import ArrowIconContainer from "../UI/ArrowIcon";
import WorldIcon from "../UI/WorldIcon";

//Styles
import {
  FooterDropdownContainer,
  FooterLanguageContainer,
  DropdownListItems,
} from "./styles";
import { colors } from "../../styles/globalStyles";

const FooterDropdown = ({ constants }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleClick = (event) => {
    selectLanguage(event);
    setIsVisible(false);
  };

  const selectLanguage = (event) => {
    constants.forEach((constant) => {
      if (event.target.id === constant.title) {
        setSelectedLanguage(constant.language);
      }
    });
  };

  const LanguageListRenderer = constants.map((constant) => {
    return (
      <DropdownListItems
        key={constant.title}
        id={constant.title}
        onClick={handleClick}
        className={`dropdown-list_item
           ${
             constant.id === constants.length - 1
               ? "dropdown-list_last-item"
               : constant.id === 0 && "dropdown-list_first-item"
           }`}
      >
        <span onClick={handleClick}>
          {constant.explanation === undefined
            ? constant.language
            : constant.language + " " + constant.explanation}
        </span>
      </DropdownListItems>
    );
  });

  const dropdownAnimationConfig = {
    active: {
      color: colors.white,
    },

    inactive: {
      color: colors.transparentTertiary,
    },
  };

  return (
    <FooterDropdownContainer>
      <div
        className="footer-dropdown-header"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        <WorldIcon isVisible={isVisible} />

        <motion.h4
          animate={isVisible ? "inactive" : "active"}
          variants={dropdownAnimationConfig}
        >
          {selectedLanguage}
        </motion.h4>

        <ArrowIconContainer constant={constants} />
      </div>

      {isVisible && (
        <FooterLanguageContainer>
          {LanguageListRenderer}
        </FooterLanguageContainer>
      )}
    </FooterDropdownContainer>
  );
};

export default FooterDropdown;
