import React from "react";
import WatchButton from "../Buttons/WatchButtons";
import { StyledDetailContainer } from "./styles";

const Detail = ({ constants }) => {
  return (
    <StyledDetailContainer>
      <div className="slider-figcaption">
        <div className="inner_figcaption">{constants.description}</div>
        <h2 className="slider-page_title">{constants.title}</h2>
      </div>
      <WatchButton title={constants.title} text="WATCH NOW" />
    </StyledDetailContainer>
  );
};

export default Detail;
