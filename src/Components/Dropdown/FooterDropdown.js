import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FooterDropdownContainer,
  FooterLanguageContainer,
  DropdownListItems,
  dropdownAnimationConfig,
  ArrowIcon,
} from "./styles";

const FooterDropdown = ({ constants }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const arrowIcon = (
    <ArrowIcon
      animate={isVisible ? "open" : "close"}
      variants={dropdownAnimationConfig}
      className="dropdown-arrow-svg"
    >
      <path d="m6 9 6 6 6-6" className="dropdown-arrow-path" />
    </ArrowIcon>
  );

  const worldIcon = (
    <motion.svg
      className={"world-icon"}
      animate={isVisible ? "inactive" : "active"}
      variants={dropdownAnimationConfig}
    >
      <path d="M11 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10v0Z" />
    </motion.svg>
  );

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

  console.log("isVisible: ", isVisible);
  return (
    <FooterDropdownContainer>
      <div
        className="footer-dropdown-header"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        {worldIcon}

        <motion.h4
          animate={isVisible ? "inactive" : "active"}
          variants={dropdownAnimationConfig}
        >
          {selectedLanguage}
        </motion.h4>

        {arrowIcon}
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
