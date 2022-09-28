import React from "react";
import WatchButton from "../Buttons/WatchButton";
import { DetailContainer } from "./styles";

const Detail = ({ constants }) => {
  return (
    <DetailContainer>
      <div className="slider-figcaption">
        <div className="inner_figcaption">{constants.description}</div>
        <h2 className="slider-page_title">{constants.title}</h2>
      </div>
      <WatchButton title={constants.title} text="WATCH NOW" />
    </DetailContainer>
  );
};

export default Detail;
