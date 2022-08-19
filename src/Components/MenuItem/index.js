import React from "react";
import SearchInput from "./SearchInput";
import { menuItems } from "../../Constants/Navbar";
import { generalIcons } from "../../Constants/generalIcons";
import { Container, NavbarMenuConfig } from "./styles";

export default function MenuItem() {
  let svgNeeds = [generalIcons[1].viewBox, generalIcons[1].path];

  let createMenuItem = menuItems.map((item) => {
    return (
      <li className="list-item" key={item.title}>
        <a href={item.link}>
          <span>{item.title}</span>
          {item.isIconVisible && (
            <svg className="list-icon" viewBox={svgNeeds[0]}>
              <path d={svgNeeds[1]} />
            </svg>
          )}
        </a>
      </li>
    );
  });

  return (
    <Container variants={NavbarMenuConfig}>
      <SearchInput/>
      <ul>{createMenuItem}</ul>
    </Container>
  );
}
