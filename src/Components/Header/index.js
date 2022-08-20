import React , { useState } from "react";
import Account from "../Account";
import { Container } from "./styles";
import HamburgerMenu from "../HamburgerMenu"
import {generalIcons} from "../../Constants/generalIcons"

export default function Header() {
  let [isVisible, setIsVisible] = useState(false);

  let updateVisibility = () => {
    setIsVisible((oldVersion) => !oldVersion);
  };

  let closeVisibility = () => {
    isVisible && setIsVisible((oldVersion) => !oldVersion);
  };

  return (
    <Container>
      <HamburgerMenu click={closeVisibility} />
      <a href="/">
        <img src={generalIcons[0].img[4]}/>
      </a>
      <Account visibility={isVisible} click={updateVisibility} />
    </Container>
  );
}
