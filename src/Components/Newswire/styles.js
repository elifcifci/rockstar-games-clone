import styled from "styled-components";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

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

  .preview-newswire {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    margin-bottom: 40px;
  }
  
  .preview-newswire .innerContainer {
    margin-bottom: 0;
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
    width: 80%;
  }

  .innerContainer {
    background-color: ${colors.black};
    margin-bottom: 32px;
    border: 1px solid ${colors.gray};
    border-radius: 7px;
    display: grid;
    grid-template-columns: 1fr;
  }

  .newswireImg {
    width: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .detail {
    padding: 32px 0 32px 0;
  }

  .detail-title-time {
    width: 80%;
    display: flex;
    flex-wrap: wrap-reverse;
  }

  time {
    padding-right: 12px;
  }

  .announcement {
    font-size: ${fontSizes.size7};
    line-height: 1.3;
    font-weight: 600;
    width: 80%;
  }

  @media${screen.tablet} {
    .preview-newswire {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.9rem;

    }
  }

  @media${screen.laptopS} {
    .preview-newswire {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
