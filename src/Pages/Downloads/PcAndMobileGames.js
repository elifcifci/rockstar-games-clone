import React, { useState } from "react";
import { PcAndMobileGamesContainer } from "./styles";
import Dropdown from "../../Components/Dropdown/index.js";

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


  let createContent = constants.map((constant) => {
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
    </PcAndMobileGamesContainer>
  );
}

export default PcAndMobileGames;
