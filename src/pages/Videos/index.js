import React from "react";
import { StyledVideosContainer } from "./styles";
import Slider from "../../components/Slider";
import { videos } from "../../constants/video";

function Videos() {
  return (
    <StyledVideosContainer>
      {videos.map((video) => {
        return (
          <Slider
            key={video[0].title}
            constants={video[1].constant}
            sliderTitle={video[0] !== "top slider" && video[0].title}
            isVisibleForTopPage={video[0].title === "top slider" ? true : false}
          />
        );
      })}
    </StyledVideosContainer>
  );
}

export default Videos;
