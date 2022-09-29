import React, { useState, useEffect } from "react";
import { getLimitedConstant } from "../../helpers/getLimitedConstant";
import { StyledPcAndMobileGamesContainer } from "./styles";

//Components
import GamesDropdown from "../../components/Dropdown/GamesDropdown";
import ArrowIconContainer from "../../components/UI/ArrowIcon";
import ViewAndMoreButtons from "../../components/Buttons/ViewAndMoreButtons";

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
            <ArrowIconContainer constant={constant} />
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
    <StyledPcAndMobileGamesContainer>
      <h2 className="content_title">
        {isPcGames ? "PC & Mac Games" : "Mobile Games & Apps"}
      </h2>
      <div className="content-container">{renderGameCards()}</div>
      <ViewAndMoreButtons
        title="Click event didn't add"
        isMoreStory={true}
        text="View All"
      />
    </StyledPcAndMobileGamesContainer>
  );
}

export default PcAndMobileGames;
