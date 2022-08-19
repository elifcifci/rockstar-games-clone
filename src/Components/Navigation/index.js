import React from "react";
import Account from "../Account";
import { Container } from "./styles";
import HamburgerMenu from "../HamburgerMenu"

export default function Navigation() {
  return (
    <Container>
      <HamburgerMenu />
      <Account />
    </Container>
  );
}
