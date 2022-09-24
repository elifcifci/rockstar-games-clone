import React from "react";
import { gamesConstant } from "../../Constants/games";
import { GameContainer } from "./styles";
import { Link } from "react-router-dom";

function Games() {
  const createGameCards = gamesConstant.map((game) => {
    return (
      <Link to={`/${game.id}`} key={game.id}>
        <img className="" src={game.poster} alt="" />
      </Link>
    );
  });

  return (
    <GameContainer>
      <div className="game-items">{createGameCards}</div>
    </GameContainer>
  );
}

export default Games;
