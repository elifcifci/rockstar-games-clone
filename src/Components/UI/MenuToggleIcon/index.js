import React from "react";
import { StyledButton, StyledIconParts } from "./style";

const MenuToggleIcon = ({ toggle }) => (
  <StyledButton onClick={toggle}>
    <StyledIconParts
      variants={{
        closed: { opacity: 1 },
        open: { y: 8 },
      }}
    />
    <StyledIconParts
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 1 },
      }}
    />
    <StyledIconParts
      variants={{
        closed: { opacity: 1 },
        open: { y: -8 },
      }}
    />
  </StyledButton>
);

export default MenuToggleIcon;
