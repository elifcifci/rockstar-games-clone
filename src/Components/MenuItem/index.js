import React, { useRef, useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { menuItems } from "../../Constants/Navbar";
// import BackDrop from "../BackDrop";

import { motion } from "framer-motion";

import { generalIcons } from "../../Constants/generalIcons";
import { MenuItemContainer } from "./styles";
import { colors } from "../../Styles/globalStyles";

export default function MenuItem({ pageTitle, isOpen }) {
  const svgNeeds = [generalIcons[1].viewBox, generalIcons[1].path];
  const carouselWidth = useRef();
  // const [width, setWidth] = useState(770);

  // useEffect(() => {
  //   setWidth(carouselWidth.current.scrollWidth + 17);
  // }, [isOpen]);

  const NavbarMenuConfig = {
    open: {
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay: 0.2,
      },
    },
    closed: {
      x: -770,
      y: 0,
      transition: {
        type: "tween",
        delay: 0.2,
      },
    },
  };

  let createMenuItem = menuItems.map((item) => {
    return (
      <motion.li className="list-item list_text" key={item.title}>
        <motion.a
          className={
            item.title === pageTitle ? "list-link active-page" : "list-link"
          }
          href={item.link}
          whileHover={{ color: colors.secondary }}
        >
          {item.title}
          {item.isIconVisible && (
            <svg className="list_icon" viewBox={svgNeeds[0]}>
              <path d={svgNeeds[1]} />
            </svg>
          )}
        </motion.a>
      </motion.li>
    );
  });

  return (
    <MenuItemContainer
      ref={carouselWidth}
      variants={NavbarMenuConfig}
      title="Site"
    >
      <SearchInput />
      <ul className="menu-list">{createMenuItem}</ul>
    </MenuItemContainer>
  );
}
