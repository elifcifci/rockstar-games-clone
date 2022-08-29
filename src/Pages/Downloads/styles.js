import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";

export const TopGameContainer = styled.div`
  background-color: ${colors.cardBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;

  .top-game_img {
    width: 80%;
  }

  .top-game-detail {
    width: 80%;
  }

  .top-game_title {
    margin: 0;
    line-height: 3rem;
    font-size: ${fontSizes.fontSize6};
  }

  .top-game_paragraph {
    line-height: 1.4rem;
    color: ${colors.text2};
  }
`;

export const FeaturedAndMiscellaneousContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .content_title {
    font-size: ${fontSizes.fontSize5};
    margin-bottom: 25px;
    padding: 50px 0 0 0;
    width: 82%;

  }

  .content-type {
    font-size: ${fontSizes.fontSize2};
    font-weight: normal;
    width: 80%;
  }

  .featured-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 0px 0 30px 0;
  }

  .featured_img {
    width: 100%;
    border-radius: 10px;
  }

  .miscellaneous-content {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .miscellaneous_img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const PcAndMobileGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;

  .content-container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .inner-container{
    display: grid;
    grid-template-row: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  .content-img {
    width: 100%;
    border-radius: 10px;
  }

  .top-game-detail {
    width: 80%;
  }

  .top-game_title {
    margin: 0;
    line-height: 3rem;
    font-size: ${fontSizes.fontSize6};
  }

  .top-game_paragraph {
    line-height: 1.4rem;
    color: ${colors.text2};
  }
`;