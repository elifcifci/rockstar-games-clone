import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled(Link)`
  .page-icon-link {
    display: flex;
    justify-content: center;
  }

  .page-icon {
    border-radius: 15%;
    width: 40px;
    height: 100%;
    position: relative;
    z-index: 3;
  }
`;
