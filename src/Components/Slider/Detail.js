import React from "react";
import { WatchButton } from "../Buttons/WatchButton";
import {DetailContainer} from "./styles"

const Detail = ({ constants, index }) => {
  return (
    <DetailContainer>
      <div className="slider-figcaption">
        <div className="inner_figcaption">
          {constants[index].description}
        </div>
        <h2 className="slider-page_title">{constants[index].title}</h2>
      </div>
      <WatchButton title={constants[index].title} text="WATCH NOW" />
    </DetailContainer>
  );
};

export default Detail;
