import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../Styles/globalStyles";

export const VideosContainer = styled(motion.div)`
  margin-bottom: 4rem;
  display: grid;
  grid-gap: 4rem;

  .top-page-container {
    background-color: ${colors.black};
    margin-bottom: 0px;
  }
`;
