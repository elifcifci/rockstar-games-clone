import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { HamburgerMenuContainer } from "./styles";

//Components
import { menuItems } from "../../constants/Navbar";
import MenuToggleIcon from "../MenuToggle";

function HamburgerMenu({ click, toggle, isOpen }) {
  const [pageTitle, setPageTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    menuItems[1].forEach((item) => {
      if (item.link === pathname || item.link === "") {
        setPageTitle(item.title);
      }
    });
  }, [pathname]);

  return (
    <HamburgerMenuContainer
      onClick={click}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      title="Open Menu"
    >
      <MenuToggleIcon toggle={toggle} />
      <span className="page-title">{pageTitle}</span>
    </HamburgerMenuContainer>
  );
}

export default HamburgerMenu;
