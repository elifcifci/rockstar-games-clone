import React, { useRef } from "react";
import { Link } from "react-router-dom";

//Components
import SearchInput from "./SearchInput";
import SquareWithArrow from "../UI/SquareWithArrow";

//Styles
import { StyledMenuItemContainer, navbarMenuConfig } from "./styles";
import { colors } from "../../styles/globalStyles";

import { motion } from "framer-motion";
import { menuItems } from "../../constants/Navbar";

function MenuItem({ pageTitle, isOpen, toggle }) {
  const carouselWidth = useRef();

  const menuItemConfig = {
    initial: { color: colors.white },
    animate: { color: colors.secondary },
  };

  let createMenuItem = menuItems[0].map((item) => {
    return (
      <Link
        to={item.link}
        className="list-item"
        key={item.title}
        onClick={toggle}
      >
        <motion.span
          className={
            item.title === pageTitle ? "list-link active-page" : "list-link"
          }
          initial="initial"
          whileHover="animate"
          variants={menuItemConfig}
        >
          {item.title}
          {item.isIconVisible && <SquareWithArrow isForMenuItem={true} />}
        </motion.span>
      </Link>
    );
  });

  return (
    <StyledMenuItemContainer
      ref={carouselWidth}
      variants={navbarMenuConfig}
      animate={isOpen ? "open" : ["closed", "displaying"]}
      title="Site"
    >
      {isOpen && <div className="toggle-back-drop" onClick={toggle} />}
      <SearchInput />
      <div className="menu-list">{createMenuItem}</div>
    </StyledMenuItemContainer>
  );
}

export default MenuItem;
