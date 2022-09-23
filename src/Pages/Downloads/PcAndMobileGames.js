import React from "react";
import { ViewMoreButtons } from "../../Components/Buttons/ViewMoreButton";
import { PcAndMobileGamesContainer } from "./styles";
import Dropdown from "../../Components/Dropdown/index.js";
import { getLimitedConstant } from "../../Helpers/getLimitedConstant";


function PcAndMobileGames({ constants, isPcGames }) {
  // const [copyConstants, setCopyConstants] = useState([...constants])

  // let updateCopyConstants = (event) => {
  //  let updatedConstants = constants.forEach((constant) => {

  //     if(event.target.id === constant.id ){
  //       constant.isOpen = true;
  //     }
  //     constant.isOpen = false;

  //   })
  //   setCopyConstants([updatedConstants])
  // }

  let limitedConstant = getLimitedConstant(3, constants);

  let createContent = limitedConstant.map((constant) => {
    return (
      <div key={constant.id} className="inner-container">
        <img className="content-img" src={constant.img} alt="" />
        <Dropdown constants={constant} isForFooter={false} />
      </div>
    );
  });

  return (
    <PcAndMobileGamesContainer>
      <h2 className="content_title">
        {isPcGames ? "PC & Mac Games" : "Mobile Games & Apps"}
      </h2>
      <div className="content-container">{createContent}</div>
      <ViewMoreButtons text="View All" />
    </PcAndMobileGamesContainer>
  );
}

export default PcAndMobileGames;
