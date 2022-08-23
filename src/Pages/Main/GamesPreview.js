import React from "react";
import { gamesPreviewConstant } from "../../Constants/gamesPreview";
import {
  GameContainer,
  NewswirePageLink,
  NewswirePageLinkAnimate,
} from "./styles";

function GamesPreview() {
  const getPreviewGames = gamesPreviewConstant.map((constant) => {
    return (
      <img
        key={constant.id}
        className="gameImg"
        src={constant.poster}
        alt=""
      />
    );
  });

  return (
    <GameContainer>
      <h2>Featured Games</h2>

      <div className="imgContainer">{getPreviewGames}</div>

      <NewswirePageLink href="/games">
        <p className="link-text">View More</p>
        <NewswirePageLinkAnimate
          initial={{ scale: 1 }}
          whileHover={{ width: 85, height: 25 }}
        />
      </NewswirePageLink>
    </GameContainer>
  );
}

export default GamesPreview;
