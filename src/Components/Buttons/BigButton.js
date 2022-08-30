import React from "react";
import { colors } from "../../Styles/globalStyles";
import { Button } from "./styles";
export const BigButton = ({ text }) => {
  return (
    <Button
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
      type="button"
    >
      {text}
    </Button>
  );
};
