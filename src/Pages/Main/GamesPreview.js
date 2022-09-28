import React from "react";
import { GameContainer } from "./styles";
import { getLimitedConstant } from "../../helpers/getLimitedConstant";

//Components
import ViewAndMoreButtons from "../../components/Buttons/ViewAndMoreButtons";
import { gamesConstant } from "../../constants/games";

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
