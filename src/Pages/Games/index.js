import React from "react";
import { Link } from "react-router-dom";
import { gamesConstant } from "../../constants/games";
import { StyledGameContainer } from "./styles";

function Games() {
  const createGameCards = gamesConstant.map((game) => {
    return (
      <Link to={`/${game.id}`} key={game.id}>
        <img className="" src={game.poster} alt="" />
      </Link>
    );
  });

  return (
    <StyledGameContainer>
      <div className="game-items">{createGameCards}</div>
    </StyledGameContainer>
  );
}

export default Games;
