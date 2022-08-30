import React, { useState } from "react";

import Account from "../Account";
import HamburgerMenu from "../HamburgerMenu";

import { generalIcons } from "../../Constants/generalIcons";
import { Container } from "./styles";

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
      <div className="inner-container">
        <HamburgerMenu click={closeVisibility} />
        <a href="/" className="page-icon">
          <img src={generalIcons[0].img[4]} />
        </a>
        <Account visibility={isVisible} click={updateVisibility} />
      </div>
    </Container>
  );
}
