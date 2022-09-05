import styled from "styled-components";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  .inner-container {
    padding: 32px;
    max-width: 1745px;
  }

  .top-page-container {
    background-color: ${colors.black};
    margin-bottom: 0px;
  }

  @media${screen.tablet} {
    .inner-container {
      padding: 72px;
    }
  }

  @media${screen.laptop} {
    .inner-container {
      padding: 80px;
    }
  }
`;

export const NewswireContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    font-size: ${fontSizes.size7};
  }

  h3 {
    padding-right: 12px;
    font-size: ${fontSizes.size2};
  }

  time {
    font-size: ${fontSizes.size2};
    color: ${colors.opacityColor};
  }

  .innerContainer {
    background-color: ${colors.black};
    margin-bottom: 32px;
    border: 1px solid ${colors.gray};
    border-radius: 7px;
    display: grid;
    grid-template-column: 1fr;
    width: 100%;
  }

  .newswireImg {
    width: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .detail-title-time {
    display: flex;
    align-items: center;
    width: 80%;
  }

  .detail {
    padding: 32px 0 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .announcement {
    font-size: ${fontSizes.size6};
    width: 80%;
  }

  @media${screen.laptopXL}{
    h2{
      font-size: ${fontSizes.size8};
    }
  }
`;

export const GameContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    width: 100%;
  }

  .imgContainer {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    grid-gap: 25px;
    margin-bottom: 32px;
  }

  .gameImg {
    width: 100%;
    border-radius: 7px;
  }

  @media${screen.laptop} {
    .imgContainer {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
