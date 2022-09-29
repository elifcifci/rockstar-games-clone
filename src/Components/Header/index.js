import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { menuItems } from "../../constants/Navbar";
import { StyledHeaderContainer } from "./styles";

//Components
import Account from "../Account";
import HamburgerMenu from "../HamburgerMenu";
import MenuItem from "../MenuItem";
import RockstarGamesIcon from "../UI/RockStarGamesIcon";

function Header({ isOpen, toggle }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    let visibilityCondition;
    window.addEventListener("scroll", () => {
      const position = window.scrollY;
      if (position <= 70) {
        visibilityCondition = true;
      } else {
        visibilityCondition = false;
      }

      visibilityCondition
        ? setIsHeaderVisible(true)
        : setIsHeaderVisible(false);
    });
  }, []);

  useEffect(() => {
    menuItems[1].forEach((item) => {
      if (item.link === pathname || item.link === "") {
        setPageTitle(item.title);
      }
    });
  }, [pathname]);

  let updateVisibility = () => {
    setIsVisible((previousState) => !previousState);
  };

  let closeVisibility = () => {
    isVisible && setIsVisible((previousState) => !previousState);
  };

  const NavbarVisibilityConfig = {
    initial: {
      position: "fixed",

      y: 0,
      transition: {
        type: "tween",
      },
    },
    animated: {
      position: "fixed",

      y: -65,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <StyledHeaderContainer>
      <motion.div
        className="header-inner-container"
        animate={isHeaderVisible ? "initial" : "animated"}
        variants={NavbarVisibilityConfig}
      >
        <HamburgerMenu
          isOpen={isOpen}
          toggle={toggle}
          closeVisibility={closeVisibility}
        />
        <RockstarGamesIcon isOpen={isOpen} toggle={toggle} />
        <Account isVisible={isVisible} updateVisibility={updateVisibility} />
      </motion.div>
      <MenuItem toggle={toggle} isOpen={isOpen} pageTitle={pageTitle} />
    </StyledHeaderContainer>
  );
}

export default Header;
