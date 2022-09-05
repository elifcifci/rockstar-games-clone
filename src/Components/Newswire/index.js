import React from "react";
import { Container } from "./styles";

export function CreateNewswireCards({
  showThisCards,
  mainConstantLength,
  isPreview,
}) {
  let result = showThisCards.map((item) => {
    if (item.id == mainConstantLength - 1) {
      return (
        <div className="first-newswire" key={item.id}>
          <img className="first-newswire_img" src={item.link} alt="" />
          <div className="first-newswire-detail">
            <div className="first-newswire-time">
              <h3>{item.title}</h3>
              <time dateTime={item.dateTime}>{item.date}</time>
            </div>
            <div className="first-announcement">{item.announcement}</div>
          </div>
        </div>
      );
    }

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

  return isPreview ? (
    <Container>
      <div className="preview-newswire">{result}</div>
    </Container>
  ) : (
    <Container>{result}</Container>
  );
}
