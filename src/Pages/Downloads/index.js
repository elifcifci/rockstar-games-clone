import React from "react";
import { downloadsConstant } from "../../constants/downloads";
import { DownloadsContainer } from "./styles";

//Components
import TopGame from "./TopGame";
import MiscellaneousAndFeatured from "./MiscellaneousAndFeatured";
import PcAndMobileGames from "./PcAndMobileGames";

function Downloads() {
  return (
    <DownloadsContainer>
      <TopGame constants={downloadsConstant.topGame} />
      <MiscellaneousAndFeatured
        constants={downloadsConstant.featuredDownloads}
        isFeatured={true}
      />
      <PcAndMobileGames
        constants={downloadsConstant.pcMacGames}
        isPcGames={true}
      />
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
