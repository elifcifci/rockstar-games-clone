import React from "react";
import MenuItem from "../MenuItem";
import { MenuToggleIcon } from "../MenuToggle";
import { Container } from "./styles";
import { useCycle } from "framer-motion";


export default function HamburgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Container initial={false} animate={isOpen ? "open" : "closed"}>
      <MenuItem/>
      <MenuToggleIcon toggle={() => toggleOpen()} />
    </Container>
  );
}
