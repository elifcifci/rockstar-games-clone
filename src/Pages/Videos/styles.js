import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../Styles/globalStyles";

export const VideosContainer = styled(motion.div)`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;

  .top-carousel-container {
    background-color: ${colors.black};
    margin-bottom: 0px;
  }
`;
