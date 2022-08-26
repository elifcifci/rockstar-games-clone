import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../Styles/globalStyles";

export const VideosContainer = styled(motion.div)`
  .top-page-container {
    background-color: ${colors.cardBackground};
    margin-bottom: 0px;
  }

  .inside-page-container {
    padding: 0px;
  }
`;
