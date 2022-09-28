import React from "react";
import { MainContainer } from "./styles";

//Components
import Slider from "../../components/Slider";
import NewswirePreview from "./NewswirePreview";
import GamesPreview from "./GamesPreview";
import { mainConstants } from "../../constants/main";

function Main() {
  return (
    <MainContainer>
      <Slider constants={mainConstants} isVisibleForTopPage={true} />
      <div className="previews-container">
        <NewswirePreview />
        <GamesPreview />
      </div>
    </MainContainer>
  );
}

export default Main;
