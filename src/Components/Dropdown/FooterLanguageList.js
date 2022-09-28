import React from "react";
import { DropdownListItems } from "./styles";

const FooterLanguageList = ({ constants, toggle, isVisible }) => {
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
