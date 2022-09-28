//Styles
import styled from "styled-components";
import { screen } from "../../../styles/globalStyles";

export const SquareIconContainer = styled.svg`
  fill: white;
  margin-left: 7px;
  width: 10px;

  ${(props) =>
    props.isForMenuItem &&
    `
      margin-left: 10px;
      width: 12px;

      @media${screen.laptopXL} {
        margin-left: 20px;
        width: 20px;
      }
    `}
`;
