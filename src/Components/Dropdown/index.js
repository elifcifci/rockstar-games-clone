import React, { useState } from "react";
import { DropdownContainer } from "./styles";
import { motion } from "framer-motion";
import FooterListItem from "./ListItem";
import PcAndMobileGamesDropdownList from "./PcAndMobileGamesItem";

const Dropdown = ({ constants, isForFooter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [rotate, setRotate] = useState(0);

  const footerHandleClick = (event) => {
    selectLanguage(event)
    updateIsVisible();
  }

  const selectLanguage = (event) => {
    constants.forEach((constant) => {
      if (event.target.id === constant.title) {
        setSelectedLanguage(constant.language);
      }
    });
    
  };

  const updateIsVisible = () => {
    setIsVisible((previous) => !previous);
    setRotate((previous) => (previous == 0 ? 180 : 0));
  };

  return (
    <DropdownContainer>
      <div
        onClick={updateIsVisible}
        className={
          isForFooter
            ? "dropdown-select-text dropdown-footer"
            : "dropdown-select-text"
        }
      >
        {isForFooter ? (
          <h4 className={isVisible ? "dropdown-title" : "games-dropdown-title"}>
            {selectedLanguage}
          </h4>
        ) : (
          <h4 className="games-dropdown-title">Select Retailer</h4>
        )}

        <motion.svg
          animate={{ rotate: rotate }}
          width="24"
          height="24"
          fill="none"
        >
          <path
            d="m6 9 6 6 6-6"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      {isForFooter && isVisible && (
        <FooterListItem
          constants={constants}
          click={footerHandleClick}
          isForFooter={isForFooter}
        />
      )}

      {!isForFooter && isVisible && (
        <PcAndMobileGamesDropdownList
          constants={constants}
          click={updateIsVisible}
        />
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
