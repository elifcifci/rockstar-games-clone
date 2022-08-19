import React from "react";
import NavbarMenu from "../NavbarMenu";
import NavbarToggle from "../NavbarToggle";
import Account from "../Account";

import { Container } from "./styles";

export default function Navigation() {
  return (
    <Container>
      {/* <NavbarMenu /> */}
      <NavbarToggle />
      <Account />
    </Container>
  );
}
