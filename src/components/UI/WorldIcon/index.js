import { iconAnimationConfig, StyledWorldIconContainer } from "./styles";

const WorldIcon = ({ isVisible }) => {
  return (
    <StyledWorldIconContainer
      className={"world-icon"}
      animate={isVisible ? "inactive" : "active"}
      variants={iconAnimationConfig}
    >
      <path d="M11 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10v0Z" />
    </StyledWorldIconContainer>
  );
};

export default WorldIcon;
