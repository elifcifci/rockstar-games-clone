import React from "react";
import { motion } from "framer-motion";
import { FooterDropdownInnerContainer } from "./styles";
import { colors } from "../../Styles/globalStyles";

const FooterDropdown = ({ constants, click }) => {
  const footerDropdownConfig = {
    initial: { background: colors.primary },
    firstAnimation: {
      color: colors.black,
    },
    secondAnimation: {
      background: colors.secondary,
      transition: { delay: 0.1 },
    },
  };

  return (
    <FooterDropdownInnerContainer>
      {constants.map((constant) => {
        return (
          <motion.span
            key={constant.title}
            onClick={click}
            id={constant.title}
            variants={footerDropdownConfig}
            initial="initial"
            whileHover={["firstAnimation", "secondAnimation"]}
            className={`dropdown-list_item
             ${
               constant.id === constants.length - 1
                 ? "dropdown-list_last-item"
                 : constant.id === 0 && "dropdown-list_first-item"
             }`}
          >
            {constant.explanation === undefined
              ? constant.language
              : constant.language + " " + constant.explanation}
          </motion.span>
        );
      })}
    </FooterDropdownInnerContainer>
  );
};

export default FooterDropdown;
