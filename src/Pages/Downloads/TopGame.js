import React from "react";
import { TopGameContainer } from "./styles";
import { WatchButton } from "../../Components/Buttons/WatchButton";

function TopGame({ constants }) {
  return (
    <TopGameContainer>
      <img className="top-game_img" src={constants.img} alt="" />
      <div className="top-game-detail">
        <h2 className="top-game_title">{constants.title}</h2>
        <div className="top-game-paragraphs">
          <p className="top-game_paragraph">{constants.describe[0]}</p>
          <p className="top-game_paragraph">{constants.describe[1]}</p>
        </div>

      <WatchButton text="DOWNLOAD NOW" />
      </div>
    </TopGameContainer>
  );
}

export default TopGame;
