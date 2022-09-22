import React, { useEffect, useState } from "react";

import Account from "../Account";
import HamburgerMenu from "../HamburgerMenu";

import { HeaderContainer } from "./styles";

export default function Header({isOpen , toggle}) {
  let [isVisible, setIsVisible] = useState(false);
  let rockstarGamesIcon = (
    <a href="/" className="page-icon-link" title="Home">
      <svg className="page-icon" viewBox="0 0 216 198.83">
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path d="M214.55 197.37a4.94 4.94 0 1 1 1.45-3.5 4.75 4.75 0 0 1-1.45 3.5Zm-6.52-6.5a4.27 4.27 0 0 0 0 6 4.25 4.25 0 0 0 6 0 4.26 4.26 0 0 0-6-6Zm2.92.27a4.24 4.24 0 0 1 1.5.2 1.36 1.36 0 0 1 .84 1.38 1.17 1.17 0 0 1-.53 1.08 2.45 2.45 0 0 1-.78.26 1.32 1.32 0 0 1 .93.52 1.57 1.57 0 0 1 .3.84v.8a1.2 1.2 0 0 0 0 .28v.07h-.89v-.66c0-.63-.17-1.05-.52-1.24a2.45 2.45 0 0 0-1.07-.17H210v2.12h-.95v-5.43Zm1 .89a2.38 2.38 0 0 0-1.16-.2H210v1.94h.87a2.48 2.48 0 0 0 .93-.13.94.94 0 0 0 .2-1.64Z" />
            <path d="M178.43 0H38.26C17.17 0 0 16.66 0 37.12v124.51c0 20.74 16.65 37 37.91 37h140.17c21.26 0 37.92-16.26 37.92-37V37.12C216 16.31 199.5 0 178.43 0Zm33.31 161.62c0 18.36-14.78 32.75-33.66 32.75H37.91C19 194.37 4.25 180 4.25 161.62V37.11c0-18.43 15-32.86 34-32.86h140.18c18.68 0 33.31 14.43 33.31 32.86Z" />
            <path
              d="M178.43 4.25H38.26c-19.06 0-34 14.43-34 32.86v124.51C4.25 180 19 194.37 37.91 194.37h140.17c18.88 0 33.66-14.39 33.66-32.75V37.11c0-18.43-14.63-32.86-33.31-32.86Z"
              fill="#fcaf17"
            />
            <path d="M185.49 118.2h-27.06l-4.29-27-15.86 26.8h-3a23.14 23.14 0 0 1-2.52-10.42c0-4.6.34-9.1.34-15 0-7.76-2.28-11.92-8.37-13.38V79c12.94-1.8 18.81-10.36 18.81-22.42 0-17.12-11.39-20.84-26.32-20.84H77.08l-17 80.4h21.37l6.18-29.25h14.19c7.57 0 10.67 3.7 10.67 10.79 0 5.39-.56 9.66-.56 13.81 0 1.54.35 5.11 1.38 6.49l15.43 16.29-13.27 28.55L143.86 146 165 162.23l-4-26.93ZM108.2 71.86h-17l4.1-19.38h15.79c5.62 0 11.46 1.46 11.46 8.34 0 8.67-6.65 11.04-14.35 11.04Z" />
            <path
              fill="#fff"
              d="M173.03 122.13h-17.95l-3.11-19.53-11.44 19.34h-18.11l11.01 11.6-9.05 19.44 19.78-11.75 15.58 11.98-2.9-19.75 16.19-11.33z"
            />
          </g>
        </g>
      </svg>
    </a>
  );
  // let [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // useEffect(() => {
  //   windows.addEventListener(() => {
  //     const position = window.pageYOffset;
  //     if(position >= 300){
  //       setIsHeaderVisible
  //     }
  //   });
  // }, []);

  let updateVisibility = () => {
    setIsVisible((oldVersion) => !oldVersion);
  };

  let closeVisibility = () => {
    isVisible && setIsVisible((oldVersion) => !oldVersion);
  };

  return (
    <HeaderContainer>
      <div className="header-inner-container">
        <HamburgerMenu isOpen={isOpen} toggle={toggle} click={closeVisibility} />
        {rockstarGamesIcon}
        <Account visibility={isVisible} click={updateVisibility} />
      </div>
    </HeaderContainer>
  );
}
