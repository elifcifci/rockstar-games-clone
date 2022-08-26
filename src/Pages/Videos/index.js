import React from "react";
import Slider from "../../Components/Slider";
import { sliderConstants, videos } from "../../Constants/video";

function Videos() {
  return (
    <>
      <Slider constants={sliderConstants} visibleTopSlidersButtons={true} />
      <Slider
        constants={videos.redDeadOnline.cardDetails}
        sliderTitle={videos.redDeadOnline.title}
        visibleForInsidePage={true}
      />
    </>
  );
}

export default Videos;
