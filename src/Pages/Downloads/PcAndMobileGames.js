import React, { useState, useEffect } from "react";
import { StyledPcAndMobileGamesContainer } from "./styles";

//helpers
import { getLimitedConstant } from "../../helpers/getLimitedConstant";

//Components
import GamesDropdown from "../../components/Dropdown/GamesDropdown";
import ArrowIconContainer from "../../components/UI/ArrowIcon";
import ViewAndMoreButtons from "../../components/Buttons/ViewAndMoreButtons";

function PcAndMobileGames({ constants, isPcGames }) {
  let [requestedLimit, setRequestedLimit] = useState(3);
  let limitedConstant = getLimitedConstant(requestedLimit, constants);

  const [copyConstants, setCopyConstants] = useState(
    JSON.parse(JSON.stringify(limitedConstant))
  );
  const [selectedDropdownId, setSelectedDropdownId] = useState("");
  useEffect(() => {
    changeConstant(selectedDropdownId);
  }, [selectedDropdownId]);

  useEffect(() => {
    limitedConstant = getLimitedConstant(requestedLimit, constants);
    setCopyConstants(JSON.parse(JSON.stringify(limitedConstant)));
  }, [requestedLimit]);

  const handleClickDropdown = (id) => {
    if (id !== selectedDropdownId) {
      setSelectedDropdownId(id);
    } else {
      setCopyConstants(() => JSON.parse(JSON.stringify(limitedConstant)));
      setSelectedDropdownId([""]);
    }
  };

  //This is the part where it is decided whether dropdown is on or not.
  const changeConstant = (id) => {
    const updatedConstant = copyConstants.map((item) => {
      item.id === id ? (item.isOpen = true) : (item.isOpen = false);
      return item;
    });
    setCopyConstants([...updatedConstant]);
  };

  //It will say how many card you want to see and it wil update when you press view all button
  const updateCounter = () => {
    let updatedRequest = requestedLimit + 4;

    updatedRequest <= constants.length
      ? setRequestedLimit(updatedRequest)
      : setRequestedLimit(constants.length - 1);
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
        click={updateCounter}
        isMoreStory={true}
        text="View All"
      />
    </StyledPcAndMobileGamesContainer>
  );
}

export default PcAndMobileGames;
