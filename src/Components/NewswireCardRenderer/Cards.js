import React from "react";

function Cards({ constants, firstCard }) {
  return (
    <>
      {constants.map((constant) => (
        <div
          className={
            firstCard ? "inner-container first-newswire" : "inner-container"
          }
          key={constant.id}
        >
          <img
            className={
              firstCard ? "first-newswire_img newswire-img " : "newswire-img"
            }
            src={constant.link}
            alt=""
          />
          {firstCard && (
            <img className="newswire-img-2" src={constant.link2} alt="" />
          )}
          <div className="detail">
            <div className="detail-title-time">
              <h3>{constant.title}</h3>
              <time dateTime={constant.dateTime}>{constant.date}</time>
            </div>
            <div className="announcement">{constant.announcement}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
