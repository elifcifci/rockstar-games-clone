import React from "react";
import SearchInput from "./SearchInput";
import { motion } from "framer-motion";
import { menuItems } from "../../Constants/Navbar";
import { generalIcons } from "../../Constants/generalIcons";
import { Container, NavbarMenuConfig } from "./styles";
import { colors } from "../../Styles/globalStyles";

export default function MenuItem({ pageTitle }) {
  const svgNeeds = [generalIcons[1].viewBox, generalIcons[1].path];

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
    <Container title="Site" variants={NavbarMenuConfig}>
      <SearchInput />
      <ul className="menu-list">{createMenuItem}</ul>
    </Container>
  );
}
