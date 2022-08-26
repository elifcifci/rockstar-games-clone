import React from "react";
import Slider from "../../Components/Slider";
import { sliderConstants, videos } from "../../Constants/video";
import { VideosContainer } from "./styles";

function Videos() {
  return (
    <VideosContainer>
      <Slider constants={sliderConstants} visibleTopSlidersButtons={true} />
      <Slider
        constants={videos.redDeadOnline.cardDetails}
        sliderTitle={videos.redDeadOnline.title}
        visibleForInsidePage={true}
      />
      <Slider
        constants={videos.GTAOnline.cardDetails}
        sliderTitle={videos.GTAOnline.title}
        visibleForInsidePage={true}
      />
      <Slider
        constants={videos.GTAOnlineSessionsEpisodes.cardDetails}
        sliderTitle={videos.GTAOnlineSessionsEpisodes.title}
        visibleForInsidePage={true}
      />

      <Slider
        constants={videos.byGame.cardDetails}
        sliderTitle={videos.byGame.title}
        visibleForInsidePage={true}
      />
    </VideosContainer>
  );
}

export default Videos;
