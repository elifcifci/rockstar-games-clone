import React from "react";
import { StyledBackdropContainer, BackDropConfig } from "./styles";

const BackDrop = ({ isOpen }) => {
  return (
    <StyledBackdropContainer
      variants={BackDropConfig}
      animate={isOpen ? "open" : ["closed", "colorChange"]}
    ></StyledBackdropContainer>
  );
};

export default BackDrop;
