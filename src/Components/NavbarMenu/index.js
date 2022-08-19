import React from "react";
import SearchInput from "./SearchInput";
import { menuItems } from "../../Constants/Navbar";
import { generalIcons } from "../../Constants/generalIcons";
import { Container } from "./styles";

export default function NavbarMenu() {
  let svgNeeds = [generalIcons[1].viewBox, generalIcons[1].path];

  let createMenuItem = menuItems.map((item) => {
    return (
      <li className="menu-item" key={item.title}>
        <a href={item.link}>
          <span>{item.title}</span>
          {item.isIconVisible && (
            <svg className="menu-icon" viewBox={svgNeeds[0]}>
              <path d={svgNeeds[1]} />
            </svg>
          )}
        </a>
      </li>
    );
  });

  return (
    <Container>
      <SearchInput />

      <ul>{createMenuItem}</ul>
    </Container>
  );
}
