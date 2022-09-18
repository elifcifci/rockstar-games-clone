import React from "react";
import Slider from "../../Components/Slider";
import { videos } from "../../Constants/video";
import { VideosContainer } from "./styles";

function Videos() {
  
  return (
    <VideosContainer>
      {videos.map((video) => {
        return (
          <Slider
            key={video[0].title}
            constants={video[1].constant}
            sliderTitle={video[0] !== "top slider" && video[0].title}
            visibleForTopPage={video[0].title === "top slider" ? true : false}
          />
        );
      })}
    </VideosContainer>
  );
}

export default Videos;


// title: "By Game",