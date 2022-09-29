import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { StyledHamburgerMenuContainer } from "./styles";

//Components
import { menuItems } from "../../constants/Navbar";
import MenuToggleIcon from "../UI/MenuToggleIcon";

function HamburgerMenu({ closeVisibility, toggle, isOpen }) {
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
    <StyledHamburgerMenuContainer
      onClick={closeVisibility}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      title="Open Menu"
    >
      <MenuToggleIcon toggle={toggle} />
      <span className="page-title">{pageTitle}</span>
    </StyledHamburgerMenuContainer>
  );
}

export default HamburgerMenu;
