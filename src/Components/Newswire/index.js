import React from "react";
import {Container} from "./styles";

export function CreateNewswireCards({showThisCards}) {

  let result = showThisCards.map((item) => {
    return (
      <div className="innerContainer" key={item.id}>
        <img className="newswireImg" src={item.link} alt="" />
        <div className="detail">
          <div className="detail-title-time">
            <h3>{item.title}</h3>
            <time dateTime={item.dateTime}>{item.date}</time>
          </div>
          <div className="announcement">{item.announcement}</div>
        </div>
      </div>
    );
  });

  return <Container>{result}</Container>;
}
