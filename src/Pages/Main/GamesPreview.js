import React from "react";
import { gamesPreviewConstant } from "../../Constants/gamesPreview";
import { ViewMoreButton } from "../../Components/Buttons/ViewMoreButton";
import { GameContainer } from "./styles";

function GamesPreview() {
  const getPreviewGames = gamesPreviewConstant.map((constant) => {
    return (
      <img key={constant.id} className="gameImg" src={constant.poster} alt="" />
    );
  });

  return (
    <GameContainer>
      <h2>Featured Games</h2>
      <div className="imgContainer">{getPreviewGames}</div>
      <ViewMoreButton text={"View More"} link={"/games"} />
    </GameContainer>
  );
}

export default GamesPreview;
