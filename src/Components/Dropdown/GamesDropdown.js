import React from "react";
import { StyledGamesDropdownContainer } from "./styles";

const GamesDropdown = ({ constants }) => {
  let listItem = constants.selectRetailer.map((constant) => {
    return (
      <p
        key={constant}
        className={` games-list_item ${
          constant ===
            constants.selectRetailer[constants.selectRetailer.length - 1] &&
          "dropdown-list_last-item"
        }`}
      >
        {constant}
      </p>
    );
  });

  return (
    <StyledGamesDropdownContainer>
      <ul className="games-dropdown-list">{listItem}</ul>
    </StyledGamesDropdownContainer>
  );
};

export default GamesDropdown;
