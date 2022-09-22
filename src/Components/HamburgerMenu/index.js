import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "../MenuItem";
import { menuItems } from "../../Constants/Navbar";
import { MenuToggleIcon } from "../MenuToggle";

import { HamburgerMenuContainer } from "./styles";

export default function HamburgerMenu({ click, toggle, isOpen }) {
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
    <HamburgerMenuContainer
      onClick={click}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      title="Open Menu"
    >
      <MenuItem
        toggle={toggle}
        isOpen={isOpen}
        pageTitle={pageTitle}
      />
      <MenuToggleIcon toggle={toggle} />
      {pageTitle}
    </HamburgerMenuContainer>
  );
}
