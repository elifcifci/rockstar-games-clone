import React from "react";
import { ViewAndMoreButtons } from "../../Components/Buttons/ViewAndMoreButtons";
import { GameContainer } from "./styles";
import { getLimitedConstant } from "../../Helpers/getLimitedConstant";
import { gamesConstant } from "../../Constants/games";

function GamesPreview() {
  const limitedConstant = getLimitedConstant(3, [...gamesConstant]);

  const getPreviewGames = limitedConstant.map((constant) => {
    return (
      <img key={constant.id} className="gameImg" src={constant.poster} alt="" />
    );
  });

  return (
    <GameContainer>
      <h2>Featured Games</h2>
      <div className="imgContainer">{getPreviewGames}</div>
      <ViewAndMoreButtons text="View More" link="/games" />
    </GameContainer>
  );
}

export default GamesPreview;
