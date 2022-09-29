//Styles
import styled from "styled-components";
import { screen, colors, fontSizes } from "../../styles/globalStyles";

export const StyledDownloadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 4rem;
  max-width: 1920px;
  box-sizing: border: box;
  margin: 0 auto;
  padding-bottom: 2rem;
  
  @media ${screen.tablet} {
    grid-gap: 8rem;
    padding-bottom: 72px;
  }

  @media ${screen.laptopS} {
    margin-bottom: 0;
    padding: 80px;
  }
`;

export const StyledTopGameContainer = styled.div`
  padding: 32px;
  background-color: ${colors.black};

  .top-game_img {
    width: 100%;
  }

  .top-game-detail {
    display: grid;
    grid-gap: 0.5rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  .top-game_title {
    margin: 0;
    line-height: 3rem;
    font-size: ${fontSizes.size31px};
  }

  .top-game-paragraphs {
    display: grid;
    grid-gap: 2rem;
  }
  .top-game_paragraph {
    line-height: 1.4rem;
    color: ${colors.tertiary};
    margin: 0;
  }

  .downLoad-button {
    margin-top: 2rem;
    max-width: 100%;
  }

  @media ${screen.tablet} {
    .top-game_paragraph {
      ${fontSizes.size18px};
    }
  }

  @media ${screen.laptopS} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    border-radius: 16px;
  }

  @media ${screen.laptopL} {
    .top-game_paragraph {
      line-height: 1.6rem;
    }

    .top-game-detail {
      display: flex;
      flex-flow: column;
    }

    .downLoad-button {
      margin-top: 2rem;
      max-width: 50%;
    }
  }

  @media ${screen.laptopXL} {
    padding: 2.8rem 5.5rem;
    grid-gap: 4rem;
    grid-template-columns: 55% 1fr;

    .top-game-detail {
      padding: 2rem 0 2rem 0;
    }

    .top-game_paragraph {
      ${fontSizes.size22px};
    }
  }
`;
export const StyledFeaturedAndMiscellaneousContainer = styled.div`
  padding: 0 32px 0 32px;
  justify-self: center;

  .inner-container {
    display: grid;
    grid-gap: 1rem;
  }

  .content_title {
    font-size: ${fontSizes.size25px};
    margin: 0 0 24px 0;
    padding: 0;
    width: 100%;
  }

  .featured-content {
    display: grid;
    grid-gap: 1.5rem;
  }

  .content-type {
    font-size: ${fontSizes.size16px};
    font-weight: normal;
    margin: 0;
  }

  .featured_img {
    width: 100%;
    border-radius: 10px;
  }

  .miscellaneous-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  .miscellaneous_img {
    width: 100%;
    border-radius: 10px;
  }

  @media ${screen.tablet} {
    padding: 0 72px 0 72px;

    .content_title {
      font-size: ${fontSizes.size25px};
    }

    .content-type {
      ${fontSizes.size18px};
    }

    .featured-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.5rem;
    }

    .inner-container {
      grid-gap: 1.5rem;
    }
  }

  @media ${screen.tablet} {
    .miscellaneous-content {
      grid-gap: 1.5rem;
      grid-row-gap: 4rem;
    }
  }

  @media ${screen.laptopS} {
    padding: 0;

    .featured-content {
      grid-gap: 2rem;
    }

    .miscellaneous-content {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media ${screen.laptopM} {
    .featured-content {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
    }

    .content_title {
      margin: 0 0 30px 0;
    }
  }

  @media ${screen.laptopL} {
    .featured-content {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const StyledPcAndMobileGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 0 32px;
  justify-self: center;

  .content-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
    column-gap: 24px;
    margin-bottom: 2rem;
  }

  .content-img {
    width: 100%;
    border-radius: 10px;
  }

  .top-game_title {
    margin: 0;
    line-height: 3rem;
    font-size: ${fontSizes.size31px};
  }

  .top-game_paragraph {
    line-height: 1.4rem;
    color: ${colors.tertiary};
  }

  .title-container {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 0 8px 8px 8px;
    border-bottom: 1px solid ${colors.transparentTertiary};
    margin-top: 1rem;
    width: 100%;
  }

  .games-dropdown-title {
    margin: 0;
    padding: 0px;
    font-size: 14px;
    color: ${colors.tertiary};
    width: 100%;
    text-align: left;
  }

  @media ${screen.tablet} {
    padding: 0 72px 0 72px;

    .content-container {
      grid-row-gap: 4rem;
      column-gap: 24px;
    }

    .title-container {
      padding: 0 9px 9px 9px;
    }

    .games-dropdown-title {
      font-size: ${fontSizes.size18px};
    }
  }

  @media ${screen.laptopS} {
    padding: 0;

    .content-container {
      grid-template-columns: repeat(4, 1fr);
    }

    .content_title {
      font-size: ${fontSizes.size25px};
    }

    .title-container {
      padding: 0 10px 10px 10px;
    }

    .games-dropdown-title {
      font-size: ${fontSizes.size20px};
    }
  }

  @media ${screen.biggestScreen} {
    .title-container {
      padding: 0 11px 11px 11px;
    }

    .games-dropdown-title {
      font-size: ${fontSizes.size22px};
    }
  }
`;
