import styled from "styled-components";
import { colors, fontSizes } from "../../Styles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};

  h3 {
    padding-right: 12px;
    font-size: ${fontSizes.size2};
  }

  time {
    font-size: ${fontSizes.size2};
    color: ${colors.opacityColor};
  }

  .first-newswire {
    margin-bottom: 55px;
    width: 100%;
    background-color: black;
  }

  .first-newswire_img {
    width: 100%;
  }
  .first-announcement {
    font-size: ${fontSizes.size7};
    font-weight: bold;
    width: 80%;
  }

  .first-newswire-detail {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .first-newswire-time {
    display: flex;
    align-items: center;
    justify-content: center;
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
