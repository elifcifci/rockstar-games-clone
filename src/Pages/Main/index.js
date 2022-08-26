import React from "react";
import Slider from "../../Components/Slider";
import NewswirePreview from "./NewswirePreview";
import GamesPreview from "./GamesPreview";
import { sliderConstants } from "../../Constants/slider";

function Main() {
  return (
    <>
      <Slider constants={sliderConstants}  visibleWatchButton={true}/>
      <NewswirePreview />
      <GamesPreview />
    </>
  );
}

export default Main;
