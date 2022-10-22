import React from "react";
import { StyledHeaderContainer } from "./styles";

function Header({ slideWithArrows, clicksCount, clickLimit, title }) {
  return (
    <StyledHeaderContainer>
      <h2 className="slider-header_title">{title}</h2>
      <div className="arrow-container">
        <svg
          viewBox="0 0 320 512"
          className={`slider-arrow   ${
            clicksCount === 0 && "slider-disabled-arrow"
          }
          `}
          id={0}
          onClick={slideWithArrows}
        >
          <path
            id={0}
            d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
          />
        </svg>

        <svg
          viewBox="0 0 320 512"
          className={`slider-arrow   ${
            clicksCount === clickLimit && "slider-disabled-arrow"
          }  
          `}
          id={1}
          onClick={slideWithArrows}
        >
          <path
            id={1}
            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
          />
        </svg>
      </div>
    </StyledHeaderContainer>
  );
}

export default Header;
