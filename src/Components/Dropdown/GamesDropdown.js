import React from "react";
import { GamesDropdownContainer, GamesDropdownListItem } from "./styles";

const GamesDropdown = ({ constants }) => {
  let listItem = constants.selectRetailer.map((constant) => {
    return (
      <GamesDropdownListItem
        key={constant}
        className={
          constant ===
          constants.selectRetailer[constants.selectRetailer.length - 1]
            ? "games-list_item dropdown-list_last-item"
            : "games-list_item"
        }
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
