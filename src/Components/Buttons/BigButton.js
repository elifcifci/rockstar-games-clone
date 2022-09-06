import React from "react";
import { colors } from "../../Styles/globalStyles";
import { SliderWatchButton } from "./styles";

export const BigButton = ({ text }) => {
  return (
    <SliderWatchButton
      initial={{
        background: colors.primary,
        color: "white",
        border: "1px solid white",
      }}
      whileHover={{
        background: colors.secondary,
        color: "black",
        border: `1px solid ${colors.secondary}`,
      }}
      type="button"
    >
      {text}
    </SliderWatchButton>
  );
};
