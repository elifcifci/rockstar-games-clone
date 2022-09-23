import React from "react";
import { BackDropContainer } from "./styles";
import { colors } from "../../Styles/globalStyles";

const BackDrop = ({ isOpen }) => {
  const BackDropConfig = {
    open: {
      background: colors.opacityColor2,
      display: "initial",
      transition: {
        type: "spring",
        damping: 30,
        delay: 0.2,
      },
    },
    colorChange: {
      background: colors.transparent,

      transition: {
        type: "tween",
        damping: 30,
        delay: 0.2,
      },
    },

    closed: {
      display: "none",
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <BackDropContainer
      variants={BackDropConfig}
      animate={isOpen ? "open" : ["closed", "colorChange"]}
    ></BackDropContainer>
  );
};

export default BackDrop;
