import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";

//Components
import SearchInput from "./SearchInput";
import SquareWithArrow from "../UI/SquareWithArrow";

//Styles
import { StyledMenuItemContainer, navbarMenuConfig } from "./styles";
import { colors } from "../../styles/globalStyles";

import { motion } from "framer-motion";
import { navbar } from "../../constants/navbar";
import ToggleOpenCloseContext from "../../context/ToggleOpenCloseContext";

function MenuItem({ pageTitle }) {
  const data = useContext(ToggleOpenCloseContext);
  const carouselWidth = useRef();

  const menuItemConfig = {
    initial: { color: colors.white },
    animate: { color: colors.secondary },
  };

  let createMenuItem = navbar[0].map((item) => {
    return (
      <Link
        to={item.link}
        key={item.title}
        onClick={data.toggledOpen}
        className={`list-item ${item.isIconVisible && "displayed-list-item"}`}
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
      animate={data.isOpen ? "open" : ["closed", "displaying"]}
      title="Site"
    >
      {data.isOpen && (
        <div className="toggle-back-drop" onClick={data.toggledOpen} />
      )}
      <SearchInput />
      <div className="menu-list">{createMenuItem}</div>
    </StyledMenuItemContainer>
  );
}

export default MenuItem;
