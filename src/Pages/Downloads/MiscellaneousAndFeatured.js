import React from "react";
import { FeaturedAndMiscellaneousContainer } from "./styles";

function MiscellaneousAndFeatured({ constants, isFeatured }) {
  let createContent = constants.map((constant) => {
    return (
      <div className="inner-container" key={constant.id}>
        <img
          className={isFeatured ? "featured_img" : "miscellaneous_img"}
          src={constant.img}
          alt=""
        />
        <h3 className="content-type">{constant.title}</h3>
      </div>
    );
  });

  return (
    <FeaturedAndMiscellaneousContainer>
      <h2 className="content_title">
        {isFeatured ? "Featured Downloads" : "Miscellaneous"}
      </h2>
      <div
        className={isFeatured ? "featured-content" : "miscellaneous-content"}
      >
        {createContent}
      </div>
    </FeaturedAndMiscellaneousContainer>
  );
}

export default MiscellaneousAndFeatured;
