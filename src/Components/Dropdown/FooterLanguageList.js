import React, { useState, useEffect } from "react";
import { DropdownListItems } from "./styles";

const FooterLanguageList = ({ constants, toggle, isVisible }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleClick = (event) => {
    selectLanguage(event);
    toggle(false);
  };

  const selectLanguage = (event) => {
    constants.forEach((constant) => {
      if (event.target.id === constant.title) {
        setSelectedLanguage(constant.language);
      }
    });
  };

  return (
    <DropdownListItems>
      {isVisible &&
        constants.map((constant) => {
          return (
            <span
              onClick={toggle}
              className={`dropdown-list_item
          ${
            constant.id === constants.length - 1
              ? "dropdown-list_last-item"
              : constant.id === 0 && "dropdown-list_first-item"
          }`}
              key={constant.title}
              id={constant.title}
            >
              {constant.explanation === undefined
                ? constant.language
                : constant.language + " " + constant.explanation}
            </span>
          );
        })}
    </DropdownListItems>
  );
};

export default FooterLanguageList;
