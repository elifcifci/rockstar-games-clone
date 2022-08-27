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

  .top-game_paragraph{
    line-height: 1.4rem;
    color: ${colors.text2};
  }
`;
