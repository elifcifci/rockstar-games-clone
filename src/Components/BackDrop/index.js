import React from "react";

//Styles
import { BackDropContainer } from "./styles";
import { colors } from "../../styles/globalStyles";

const BackDrop = ({ isOpen }) => {
  const BackDropConfig = {
    open: {
      background: colors.transparentBlack,
      display: "initial",
      transition: {
        type: "spring",
        damping: 30,
        delay: 0.2,
      },
    },
    colorChange: {
      opacity: 0,
      background: colors.transparentColor,

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
