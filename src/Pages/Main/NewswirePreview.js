import React from "react";
import { newswirePreviewConstant } from "../../Constants/newswirePreview";
import { Container, NewswirePageLink, NewswirePageLinkAnimate } from "./styles";
import { motion } from "framer-motion";
import { colors } from "../../Styles/globalStyles";

function NewswirePreview() {
  const getPreviewNewswire = newswirePreviewConstant.map((constant) => {
    return (
      <div className="innerContainer" key={constant.id}>
        <img className="newswireImg" src={constant.link} alt="" />
        <div className="detail">
          <div className="detail-title-time">
            <h3>{constant.title}</h3>
            <time dateTime={constant.dateTime}>{constant.date}</time>
          </div>
          <div className="announcement">{constant.announcement}</div>
        </div>
      </div>
    );
  });

  return (
    <Container>
      <h2>Newswire</h2>
      {getPreviewNewswire}
      <NewswirePageLink href="/newswire">
        <p className="link-text">View More</p>
        <NewswirePageLinkAnimate
          initial={{ scale: 1 }}
          whileHover={{ width: 85, height: 25 }}
        />
      </NewswirePageLink>
    </Container>
  );
}

export default NewswirePreview;
