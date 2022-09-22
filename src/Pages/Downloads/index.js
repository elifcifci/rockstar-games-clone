import React from "react";

import TopGame from "./TopGame";
import MiscellaneousAndFeatured from "./MiscellaneousAndFeatured";
import PcAndMobileGames from "./PcAndMobileGames";

import { downloadsConstant } from "../../Constants/downloads";

import {DownloadsContainer} from "./styles"

function Downloads() {

  return (
    <DownloadsContainer>

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
    </DownloadsContainer>
  );
}

export default Downloads;
