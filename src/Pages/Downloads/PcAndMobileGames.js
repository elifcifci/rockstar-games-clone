import React, { useState, useEffect } from "react";

import { ViewAndMoreButtons } from "../../Components/Buttons/ViewAndMoreButtons";
import { PcAndMobileGamesContainer } from "./styles";
import GamesDropdown from "../../Components/Dropdown/GamesDropdown";
import { getLimitedConstant } from "../../Helpers/getLimitedConstant";
import {
  dropdownAnimationConfig,
  ArrowIcon,
} from "../../Components/Dropdown/styles";

function PcAndMobileGames({ constants, isPcGames }) {
  let limitedConstant = getLimitedConstant(3, constants);

  const [copyConstants, setCopyConstants] = useState(
    JSON.parse(JSON.stringify(limitedConstant))
  );
  const [selectedDropdownId, setSelectedDropdownId] = useState("");

  useEffect(() => {
    changeConstant(selectedDropdownId);
  }, [selectedDropdownId]);

  const handleClickDropdown = (id) => {
    if (id !== selectedDropdownId) {
      setSelectedDropdownId(id);
    } else {
      setCopyConstants(() => JSON.parse(JSON.stringify(limitedConstant)));
      setSelectedDropdownId([""]);
    }
  };

  const changeConstant = (id) => {
    const updatedConstant = copyConstants.map((item) => {
      item.id === id ? (item.isOpen = true) : (item.isOpen = false);
      return item;
    });
    setCopyConstants([...updatedConstant]);
  };

  const renderGameCards = () => {
    return copyConstants.map((constant) => {
      return (
        <div key={constant.id} className="inner-container">
          <img className="content-img" src={constant.img} alt="" />
          <div
            id={constant.id}
            className="title-container"
            onClick={() => {
              handleClickDropdown(constant.id);
            }}
          >
            <h4 id={constant.id} className="games-dropdown-title">
              Select Retailer
            </h4>
            <ArrowIcon
              animate={constant.isOpen ? "open" : "close"}
              variants={dropdownAnimationConfig}
              className="dropdown-arrow-svg"
              id={constant.id}
            >
              <path d="m6 9 6 6 6-6" className="dropdown-arrow-path" />
            </ArrowIcon>
          </div>
          {constant.isOpen && (
            <GamesDropdown
              isOpen={constant.isOpen}
              id={constant.id}
              constants={constant}
              isForFooter={false}
            />
          )}
        </div>
      );
    });
  };

  return (
    <PcAndMobileGamesContainer>
      <h2 className="content_title">
        {isPcGames ? "PC & Mac Games" : "Mobile Games & Apps"}
      </h2>
      <div className="content-container">{renderGameCards()}</div>
      <ViewAndMoreButtons
        title="Click event didn't add"
        isMoreStory={true}
        text="View All"
      />
    </PcAndMobileGamesContainer>
  );
}

export default PcAndMobileGames;
