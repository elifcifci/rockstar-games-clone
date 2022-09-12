import React from "react";
import Slider from "../../Components/Slider";
import NewswirePreview from "./NewswirePreview";
import GamesPreview from "./GamesPreview";
import { mainConstants } from "../../Constants/main";
import { MainContainer } from "./styles";

function Main() {
  return (
    <MainContainer>
      <Slider
        constants={mainConstants}
        visibleForTopPage={true}
      />
      <div className="previews-container">
        <NewswirePreview />
        <GamesPreview />
      </div>
    </MainContainer>
  );
}

export default Main;
