import React from "react";
import TopGame from "./TopGame"
import {gamesConstant} from "../../Constants/downloads"

function Downloads() {
  return (
    <>
    <TopGame constants={gamesConstant.topGame}/>
    </>
  );
}

export default Downloads;