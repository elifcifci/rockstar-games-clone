import React from "react";
import { motion } from "framer-motion";

import AccountIcon from "../UI/AccountIcon";

//Styles
import { StyledAccountContainer } from "./styles";
import { colors } from "../../styles/globalStyles";

function Account({ isVisible, click }) {
  return (
    <StyledAccountContainer>
      <AccountIcon click={click} />

      {/* There is a dropdown under the AccountIcon. Its visibility depends onClick event. */}
      {isVisible && (
        <ul className="account-list">
          <motion.li
            initial={{ background: colors.primary }}
            whileHover={{ background: colors.cardBorder }}
            className="account-list_item account-list-border"
          >
            Sign In
          </motion.li>

          <motion.li
            initial={{ background: colors.primary }}
            whileHover={{ background: colors.cardBorder }}
            className="account-list_item"
          >
            Join Social Club{" "}
          </motion.li>
        </ul>
      )}
    </StyledAccountContainer>
  );
}

export default Account;
