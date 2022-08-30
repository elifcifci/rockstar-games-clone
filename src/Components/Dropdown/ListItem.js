import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../Styles/globalStyles";

const FooterListItem = ({ constants, click }) => {
  return (
    <ul className="dropdown-list">
      {constants.map((constant) => {
        return (
          <motion.li
            key={constant.title}
            onClick={click}
            id={constant.title}
            initial={{ background: colors.primary }}
            whileHover={{ background: colors.secondary, color: colors.black }}
            transition={{ delay: 0.1 }}
            className={
              constant.id === constants.length - 1
                ? "dropdown-list_item dropdown-list_last-item"
                : constant.id === 0
                ? "dropdown-list_item dropdown-list_first-item"
                : "dropdown-list_item"
            }
          >
            {constant.explanation === undefined
              ? constant.language
              : constant.language + " " + constant.explanation}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default FooterListItem;
