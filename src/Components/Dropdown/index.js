import React, { useState } from "react";
import { DropdownContainer, FooterDropdownContainer } from "./styles";
import { motion, useCycle } from "framer-motion";
import FooterDropdown from "./FooterDropdown";
import PcAndMobileGamesDropdownList from "./PcAndMobileGamesItem";

const Dropdown = ({ constants, isForFooter }) => {
  const [isVisible, toggleVisible] = useCycle(false, true);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const selectLanguage = (event) => {
    constants.forEach((constant) => {
      if (event.target.id === constant.title) {
        setSelectedLanguage(constant.language);
      }
    });
  };

  const dropdownIconAnimationConfig = {
    open: {
      rotate: 180,
      transition: { type: "teen" },
    },
    close: {
      rotate: 0,
      transition: { type: "teen" },
    },
  };

  const dropdownIcon = (
    <motion.svg
      animate={isVisible ? "open" : "close"}
      variants={dropdownIconAnimationConfig}
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
  );

  return (
    <DropdownContainer>
      <FooterDropdownContainer
        onClick={() => toggleVisible()}
        className={`dropdown-select-text ${isForFooter && "dropdown-footer"}`}
      >
        {isForFooter && isVisible && (
          <FooterDropdown
            constants={constants}
            click={selectLanguage}
            isForFooter={isForFooter}
          />
        )}

        {isForFooter ? (
          <h4 className={isVisible ? "dropdown-title" : "games-dropdown-title"}>
            {selectedLanguage}
          </h4>
        ) : (
          <h4 className="games-dropdown-title">Select Retailer</h4>
        )}
        {dropdownIcon}
      </FooterDropdownContainer>

      {!isForFooter && isVisible && (
        <PcAndMobileGamesDropdownList
          constants={constants}
          click={() => toggleVisible()}
        />
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
