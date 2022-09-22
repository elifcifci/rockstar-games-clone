import React from "react";
import { BackDropContainer } from "./styles";
import { colors } from "../../Styles/globalStyles";

const BackDrop = ({ toggle, isOpen }) => {
  const BackDropConfig = {
    open: {
      background: colors.opacityColor2,
      transition: {
        type: "tween",
        delay: 0.2,
      },
    },
    closed: {
      background: colors.transparent,
      transition: {
        type: "tween",
        delay: 0.2,
      },
    },
  };

  return (
    <BackDropContainer
      variants={BackDropConfig}
      animate={isOpen ? "open" : "closed"}
      onClick={toggle}
    ></BackDropContainer>
  );
};

export default BackDrop;
