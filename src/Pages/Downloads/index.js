import React from "react";
import TopGame from "./TopGame";
import MiscellaneousAndFeatured from "./MiscellaneousAndFeatured";
import { gamesConstant } from "../../Constants/downloads";

function Downloads() {
  return (
    <>
      <TopGame constants={gamesConstant.topGame} />
      <MiscellaneousAndFeatured
        constants={gamesConstant.featuredDownloads}
        isFeatured={true}
      />
      <MiscellaneousAndFeatured
        constants={gamesConstant.miscellaneous}
        isFeatured={false}
      />
    </>
  );
}

export default Downloads;
