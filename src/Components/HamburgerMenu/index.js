import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "../MenuItem";
import { menuItems } from "../../Constants/Navbar";
import { MenuToggleIcon } from "../MenuToggle";

import { Container } from "./styles";
import { useCycle } from "framer-motion";

export default function HamburgerMenu({ click }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [pageTitle, setPageTitle] = useState("");

  let pageName = useLocation().pathname;
  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.link === pageName) {
        setPageTitle(item.title);
      }
    });
  }, []);

  return (
    <Container
      onClick={click}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      title="Open Menu"
    >
      <MenuItem pageTitle={pageTitle}/>
      <MenuToggleIcon toggle={() => toggleOpen()} />
      {pageTitle}
    </Container>
  );
}
