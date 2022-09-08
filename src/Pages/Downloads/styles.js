import styled from "styled-components";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

export const DownloadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 4rem;
  max-width: 1920px;
  box-sizing: border: box;
  margin: 0 auto;

  @media${screen.tablet} {
    grid-gap: 8rem;
    margin-bottom: 72px;
  }

  @media${screen.laptopS} {
    padding: 4rem;
    margin-bottom: 0;
    padding: 80px;
  }
`;

export const TopGameContainer = styled.div`
  padding: 32px;
  background-color: ${colors.black};

  .top-game_img {
    width: 100%;
  }

  .top-game-detail {
    display: grid;
    grid-gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .top-game_title {
    margin: 0;
    line-height: 3rem;
    font-size: ${fontSizes.size8};
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

  @media${screen.tablet} {
    .top-game_paragraph {
      font-size: 18px;
    }
  }

  @media${screen.laptopS} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    padding: 4rem;
    border-radius: 16px;

    .top-game_paragraph {
      font-size: 20px;
    }
  }

  @media${screen.laptopL} {
    .top-game_paragraph {
      line-height: 1.6rem;
    }

    .top-game-detail {
      display: flex;
      flex-flow: column;
    }
  }

  @media${screen.laptopXL} {
    padding: 2rem 4rem;
    grid-gap: 4rem;
    grid-template-columns: 55% 1fr;

    .top-game-detail {
      padding: 2rem 0 2rem 0;
    }

    .top-game_paragraph {
      font-size: 22px;
    }
  }
`;
export const FeaturedAndMiscellaneousContainer = styled.div`
  padding: 0 32px 0 32px;
  justify-self: center;

  .inner-container {
    display: grid;
    grid-gap: 1rem;
  }

  .content_title {
    font-size: ${fontSizes.size7};
    margin: 0 0 24px 0;
    padding: 0;
    width: 100%;
  }

  .featured-content {
    display: grid;
    grid-gap: 1.5rem;
  }

  .content-type {
    font-size: ${fontSizes.size3};
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

  @media${screen.tablet} {
    padding: 0 72px 0 72px;

    .content_title {
      font-size: ${fontSizes.size7};
    }

    .content-type {
      font-size: 18px;
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

  @media${screen.tablet} {
    .miscellaneous-content {
      grid-gap: 1.5rem;
      grid-row-gap: 4rem;
    }
  }

  @media${screen.laptopS} {
    padding: 0;

    .featured-content {
      grid-gap: 2rem;
    }

    .miscellaneous-content {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media${screen.laptopM} {
    .featured-content {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
    }

    .content_title {
      margin: 0 0 30px 0;
    }
  }

  @media${screen.laptopL} {
    .featured-content {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const PcAndMobileGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 0 32px;
  justify-self: center;

  .content-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .inner-container {
    display: grid;
    grid-template-row: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  .content-img {
    width: 100%;
    border-radius: 10px;
  }

  .top-game_title {
    margin: 0;
    line-height: 3rem;
    font-size: ${fontSizes.size8};
  }

  .top-game_paragraph {
    line-height: 1.4rem;
    color: ${colors.tertiary};
  }

  @media${screen.tablet} {
    padding: 0 72px 0 72px;
    .content-container {
      grid-row-gap: 4rem;
    }
  }

  @media${screen.laptopS} {
    padding: 0;

    .content-container {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1.5rem;
    }

    .content_title {
      font-size: ${fontSizes.size7};
    }
  }
`;
