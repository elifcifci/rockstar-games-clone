import styled from "styled-components";
import { colors } from "../../Styles/globalStyles";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0 20px 0;
  background-color: ${colors.primary};

  a {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 85%;
    margin-bottom: 25px;
    border-radius: 10px;
  }
`;
