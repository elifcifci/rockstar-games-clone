import React from "react";
import { gamesConstant } from "../../Constants/games";
import {GameContainer} from "./styles";

function Games() {
  const createGameCards = gamesConstant.map((game) => {
    return (
      <a href={`/${game.id}`} key={game.id}>
        <img className="" src={game.poster} alt="" />
      </a>
    );
  });

  return <GameContainer>{createGameCards}</GameContainer>;
}

export default Games;
