import React from "react";

//Styles
import { colors } from "../../styles/globalStyles";
import { SliderWatchButton } from "./styles";

const WatchButton = ({ text, title, isForDownLoad }) => {
  return (
    <SliderWatchButton
      className={isForDownLoad && "downLoad-button"}
      initial={{
        background: colors.primary,
        color: colors.white,
        border: `1px solid ${colors.white}`,
      }}
      whileHover={{
        background: colors.secondary,
        color: colors.black,
        border: `1px solid ${colors.secondary}`,
      }}
      type="button"
      title={title}
    >
      {text}
    </SliderWatchButton>
  );
};

export default WatchButton;
