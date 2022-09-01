import React from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "../MenuItem";
import { menuItems } from "../../Constants/Navbar";
import { MenuToggleIcon } from "../MenuToggle";

import { Container } from "./styles";
import { useCycle } from "framer-motion";

export default function HamburgerMenu({ click }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  let pageName = useLocation().pathname;
  return (
    <Container
      onClick={click}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      title="Open Menu"
    >
      <MenuItem />
      <MenuToggleIcon toggle={() => toggleOpen()} />
      {menuItems.map((item) => item.link === pageName && item.title)}
    </Container>
  );
}
