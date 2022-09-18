import styled from "styled-components";
import { screen, colors, fontSizes } from "../../Styles/globalStyles";

export const MainContainer = styled.div`
  .previews-container {
    display: grid;
    grid-gap: 4rem;
    padding: 2rem;
  }

  .top-page-container {
    background-color: ${colors.black};
    margin-bottom: 0px;
  }

  @media${screen.tablet} {
    .previews-container {
      padding: 4rem;
      grid-gap: 8rem;
    }
  }

  @media${screen.laptopS} {
    .previews-container {
      padding: 80px;
    }
  }
`;

export const NewswireCards = styled.div`
max-width: 1745px;
margin: 0 auto;

  h2 {
    width: 100%;
    font-size: ${fontSizes.size7};
  }

  @media${screen.laptopS} {
    .previews-container {
      padding: 80px;
    }
  }
`;

export const GameContainer = styled.div`
max-width: 1745px;
margin: 0 auto;

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

  @media${screen.laptopS} {
    .imgContainer {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
