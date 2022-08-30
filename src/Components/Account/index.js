import React from "react";
import { motion } from "framer-motion";
import { Container, AccountIcon, AccountContainer } from "./styles";
import { colors } from "../../Styles/globalStyles";

export default function Account({ visibility, click }) {
  return (
    <Container>
      <AccountIcon
        onClick={click}
        className="svg1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 48 48"
        whitespace="preserve"
      >
        <circle className="svgCircle" cx="24" cy="24" r="24" />
        <defs>
          <path
            id="a"
            d="M23.435 36s-.075 0 0 0h-.6c-2.025 0-4.199 0-6.299-.6-2.25-.675-3.449-1.8-3.524-3.524-.075-.825.225-1.65.75-2.325.825-1.125 2.025-1.8 3.074-2.325.375-.225.75-.375 1.125-.6.45-.3 1.5-1.05 1.575-2.025 0-.45-.15-.975-.6-1.575l-.45-.675c-.3-.45-.6-.9-.9-1.425-.9-1.875-.75-4.199.3-5.924.15-.225.3-.45.525-.675a6.987 6.987 0 0 1 5.249-2.325c2.025-.075 3.974.825 5.399 2.25.225.225.45.525.6.75 1.05 1.725 1.125 4.049.225 5.924-.3.525-.6.975-.9 1.425l-.45.675c-.375.6-.6 1.125-.6 1.575.075.975 1.125 1.725 1.575 2.025.375.225.75.45 1.125.6 1.05.525 2.25 1.125 3.074 2.325.525.675.75 1.575.75 2.325-.075 1.65-1.275 2.849-3.524 3.524-.525.15-1.05.225-1.5.375-.525.075-1.125-.3-1.2-.825-.075-.525.3-1.125.825-1.2.45-.075.9-.15 1.275-.3 1.8-.525 2.025-1.125 2.025-1.65 0-.375-.075-.675-.375-1.05-.525-.75-1.425-1.2-2.325-1.725-.45-.225-.825-.45-1.275-.675-1.575-.975-2.475-2.25-2.55-3.674-.075-.9.225-1.8.9-2.849.15-.225.3-.525.525-.75.3-.375.525-.75.75-1.125.6-1.2.525-2.7-.15-3.899-.075-.075-.15-.15-.3-.375-.975-1.05-2.4-1.65-3.899-1.65a5.11 5.11 0 0 0-3.749 1.65c-.15.15-.225.3-.3.375-.675 1.2-.75 2.7-.15 3.899.225.375.45.75.75 1.125.15.225.375.45.525.75.675.975.975 1.95.9 2.849-.075 1.425-.975 2.7-2.55 3.674-.375.225-.825.45-1.275.675-.9.525-1.8.975-2.325 1.725-.225.3-.375.675-.375 1.05 0 .525.3 1.125 2.025 1.65 1.8.525 3.674.525 5.699.525h.6c.3 0 .6.15.75.375.225.225.3.525.225.825-.001.45-.451.825-.975.825z"
          />
        </defs>
        <use xlinkHref="#a" className="svgUse1" />
        <clipPath id="b">
          <use className="svgUse2" xlinkHref="#a" />
        </clipPath>
        <path className="svgPath" d="M8 7h31.458v34H8z" />
      </AccountIcon>

      {visibility && (
        <AccountContainer>
          <ul className="account-list">
            <motion.li
              initial={{ background: colors.primary }}
              whileHover={{ background: colors.gray }}
              className="account-list_item account-list--border"
            >
              Sign In
            </motion.li>
            <motion.li
              initial={{ background: colors.primary }}
              whileHover={{ background: colors.gray }}
              className="account-list_item"
            >
              Join Social Club{" "}
            </motion.li>
          </ul>
        </AccountContainer>
      )}
    </Container>
  );
}
