import React from "react";
import TopGame from "./TopGame";
import MiscellaneousAndFeatured from "./MiscellaneousAndFeatured";
import PcAndMobileGames from "./PcAndMobileGames";
import { downloadsConstant } from "../../Constants/downloads";

function Downloads() {
  return (
    <>
      <TopGame constants={downloadsConstant.topGame} />
      <MiscellaneousAndFeatured
        constants={downloadsConstant.featuredDownloads}
        isFeatured={true}
      />

      <PcAndMobileGames constants={downloadsConstant.pcMacGames} isPcGames={true} />
      <PcAndMobileGames
        constants={downloadsConstant.mobileGamesApps}
        isPcGames={false}
      />
      <MiscellaneousAndFeatured
        constants={downloadsConstant.miscellaneous}
        isFeatured={false}
      />
    </>
  );
}

export default Downloads;
