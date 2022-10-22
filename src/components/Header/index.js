import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { navbar } from "../../constants/navbar";
import { StyledHeaderContainer, NavbarVisibilityConfig } from "./styles";

//Components
import Account from "../Account";
import HamburgerMenu from "../HamburgerMenu";
import MenuItem from "../MenuItem";
import RockstarGamesIcon from "../UI/RockStarGamesIcon";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${pageTitle} ${
      pageTitle === "" ? "" : "-"
    } Rockstar Games`;
  }, [pageTitle]);

  useEffect(() => {
    const calculateScrollAmount = () => {
      let visibilityCondition;

      window.scrollY <= 70
        ? (visibilityCondition = true)
        : (visibilityCondition = false);

      visibilityCondition
        ? setIsHeaderVisible(true)
        : setIsHeaderVisible(false);
    };

    window.addEventListener("scroll", calculateScrollAmount);
    return (_) => {
      window.removeEventListener("scroll", calculateScrollAmount);
    };
  }, []);

  useEffect(() => {
    navbar[1].forEach((item) => {
      if (item.link === pathname || item.link === "") {
        setPageTitle(item.title);
      }
    });
  }, [pathname]);

  const updateMenuItemVisibility = () => {
    setIsMenuItemVisible(true);
  };

  const closeVisibility = () => {
    isVisible && setIsVisible((previousState) => !previousState);
  };

  const handleClick = () => {
    updateMenuItemVisibility();
    closeVisibility();
  };

  const updateVisibility = () => {
    setIsVisible((previousState) => !previousState);
  };

  return (
    <StyledHeaderContainer>
      <motion.div
        className="header-inner-container"
        animate={isHeaderVisible ? "initial" : "animated"}
        variants={NavbarVisibilityConfig}
      >
        <HamburgerMenu handleClick={handleClick} />
        <RockstarGamesIcon />
        <Account isVisible={isVisible} updateVisibility={updateVisibility} />
      </motion.div>

      {isMenuItemVisible && <MenuItem pageTitle={pageTitle} />}
    </StyledHeaderContainer>
  );
}

export default Header;
