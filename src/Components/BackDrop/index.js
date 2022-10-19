import React, { useContext } from "react";
import { StyledBackdropContainer, BackDropConfig } from "./styles";
import ToggleOpenCloseContext from "../../context/ToggleOpenCloseContext";

const Backdrop = () => {
  const data = useContext(ToggleOpenCloseContext);

  return (
    <StyledBackdropContainer
      variants={BackDropConfig}
      animate={data.isOpen ? "open" : ["closed", "colorChange"]}
    ></StyledBackdropContainer>
  );
};

export default Backdrop;
