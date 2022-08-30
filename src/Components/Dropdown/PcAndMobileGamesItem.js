import React from "react";
import { motion } from "framer-motion";
import { colors } from "../../Styles/globalStyles";

const PcAndMobileGamesDropdownList = ({ constants, click }) => {

  let listItem = constants.selectRetailer.map((constant) => {
    return (
      <motion.li
        key={constant}
        onClick={click}
        initial={{ background: colors.backgroundColor }}
        whileHover={{ background: colors.secondary, color: "black" }}
        transition={{ delay: 0.1 }}
        className={
          constant === constants.selectRetailer[constants.selectRetailer.length - 1]
            ? "games-list_item dropdown-list_last-item"
            : "games-list_item"
        }
      >
        {constant}
      </motion.li>
    );
  });

  return <ul className="games-dropdown-list">{listItem}</ul>;
};

export default PcAndMobileGamesDropdownList;