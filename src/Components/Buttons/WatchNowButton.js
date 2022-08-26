import { motion } from "framer-motion";
import React from "react";
import { colors } from "../../Styles/globalStyles";

export const WatchNowButton = () => {

  return (
      <motion.button
        initial={{
          background: colors.backgroundColor,
          color: "white",
          border: "1px solid white",
        }}
        whileHover={{
          background: colors.secondary,
          color: "black",
          border: `1px solid ${colors.secondary}`,
        }}
        className="carousel_watch-button"
        type="button"
      >
        WATCH NOW
      </motion.button>
  );
};