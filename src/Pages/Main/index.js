import React from "react";
import Slider from "../../Components/Slider";
import NewswirePreview from "./NewswirePreview";
import GamesPreview from "./GamesPreview";
import { sliderConstants } from "../../Constants/slider";
import {MainContainer} from "./styles"

function Main() {
  return (
    <MainContainer>
      <Slider constants={sliderConstants}  visibleTopSlidersButtons={true}/>
      <NewswirePreview />
      <GamesPreview />
    </MainContainer>
  );
}

export default Main;
