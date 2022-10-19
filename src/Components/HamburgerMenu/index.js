import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

//Components
import { menuItems } from "../../constants/Navbar";
import MenuToggleIcon from "../UI/MenuToggleIcon";

import { StyledHamburgerMenuContainer } from "./styles";
import ToggleOpenCloseContext from "../../context/ToggleOpenCloseContext";

function HamburgerMenu({ handleClick }) {
  const [pageTitle, setPageTitle] = useState("");
  const { pathname } = useLocation();

  const data = useContext(ToggleOpenCloseContext);
  useEffect(() => {
    menuItems[1].forEach((item) => {
      if (item.link === pathname || item.link === "") {
        setPageTitle(item.title);
      }
    });
  }, [pathname]);

  return (
    <StyledHamburgerMenuContainer
      onClick={handleClick}
      initial={false}
      animate={data.isOpen ? "open" : "closed"}
      title="Open Menu"
    >
      <MenuToggleIcon toggle={data.toggledOpen} />
      <span className="page-title">{pageTitle}</span>
    </StyledHamburgerMenuContainer>
  );
}

export default HamburgerMenu;
