import React, { useState } from "react";
import { StyledNewswireContainer } from "./styles";
import { getLimitedConstant } from "../../helpers/getLimitedConstant";

//Components
import NewswireCardRenderer from "../../components/NewswireCardRenderer/index";
import ViewAndMoreButtons from "../../components/Buttons/ViewAndMoreButtons";
import { newswireConstants } from "../../constants/newswire";

function Newswire() {
  let [requestedLimit, setRequestedLimit] = useState(18);
  const constantsLength = newswireConstants.length;

  let updateCounter = () => {
    let updatedRequest = requestedLimit + 20;

    updatedRequest <= constantsLength
      ? setRequestedLimit(updatedRequest)
      : setRequestedLimit(constantsLength - 1);
  };

  let limitedNewswireConstant = getLimitedConstant(
    requestedLimit,
    newswireConstants
  );
  return (
    <StyledNewswireContainer>
      <NewswireCardRenderer isTopCard={true} constants={newswireConstants} />
      <div>
        <NewswireCardRenderer
          isTopCard={false}
          constants={[...limitedNewswireConstant]}
        />
      </div>
      <ViewAndMoreButtons
        isMoreStory={true}
        click={updateCounter}
        text="More Stories"
        link="/newswire"
      />
    </StyledNewswireContainer>
  );
}

export default Newswire;
