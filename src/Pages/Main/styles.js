import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";

export const MainContainer = styled.div`
  .top-page-container {
    background-color: ${colors.black};
    margin-bottom: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    width: 80%;
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
`;

export const GameContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    width: 80%;
  }

  .imgContainer {
    width: 80%;
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
`;
