import React from "react";
import { GamesDropdownContainer, GamesDropdownListItem } from "./styles";

const GamesDropdown = ({ constants }) => {
  let listItem = constants.selectRetailer.map((constant) => {
    return (
      <GamesDropdownListItem
        key={constant}
        className={` games-list_item ${
          constant ===
            constants.selectRetailer[constants.selectRetailer.length - 1] &&
          "dropdown-list_last-item"
        }`}
      >
        {constant}
      </GamesDropdownListItem>
    );
  });

  return (
    <GamesDropdownContainer>
      <ul className="games-dropdown-list">{listItem}</ul>
    </GamesDropdownContainer>
  );
};

export default GamesDropdown;
