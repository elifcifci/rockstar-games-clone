//Styles
import styled from "styled-components";
import { screen, colors } from "../../styles/globalStyles";

export const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 32px 0px 32px;
  background-color: ${colors.primary};

  .game-items {
    display: grid;
    grid-gap: 1.5rem;
    max-width: 1920px;
  }
  a {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }

  @media ${screen.tablet} {
    padding: 4rem;

    .game-items {
      grid-gap: 1.8rem;
    }

    img {
      width: 100%;
    }
  }

  @media ${screen.tabletM} {
    .game-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }

    img {
      width: 100%;
      margin: 0px;
    }
  }

  @media ${screen.laptopM} {
    padding: 80px;

    .game-items {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1547px) {
    .game-items {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1897px) {
    padding: 88px;

    .game-items {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
