import { iconAnimationConfig, StyledArrowIconContainer } from "./styles";

const ArrowIcon = ({ constant }) => {
  return (
    <StyledArrowIconContainer
      animate={constant.isOpen ? "open" : "close"}
      variants={iconAnimationConfig}
      className="dropdown-arrow-svg"
      id={constant.id}
    >
      <path d="m6 9 6 6 6-6" className="dropdown-arrow-path" />
    </StyledArrowIconContainer>
  );
};

export default ArrowIcon;
