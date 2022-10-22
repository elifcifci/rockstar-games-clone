import { iconAnimationConfig, StyledArrowIconContainer } from "./styles";

const ArrowIcon = ({ constant, isFooter }) => {
  return (
    <StyledArrowIconContainer
      animate={
        constant.isOpen || constant === true
          ? "open" || "true"
          : "close" || "false"
      }
      variants={iconAnimationConfig}
      className="dropdown-arrow-svg"
      id={constant.id}
    >
      <path
        d="m6 9 6 6 6-6"
        className={`dropdown-arrow-path ${
          isFooter && constant === true && "footer-dropdown-arrow-path"
        }`}
      />
    </StyledArrowIconContainer>
  );
};

export default ArrowIcon;
