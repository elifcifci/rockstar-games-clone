import React, { useState } from "react";
import { Container } from "./styles";
import { NewswireCardRenderer } from "../../Components/NewswireCardRenderer/index";
import { MoreStoriesButton } from "../../Components/Buttons/MoreStoriesButton";
import { newswireConstants } from "../../Constants/newswire";
import { getLimitedConstant } from "../../Helpers/getLimitedConstant";

function Newswire() {
  let [requestedLimit, setRequestedLimit] = useState(18);
  const constantsLength = newswireConstants.length;

  let updateCounter = () => {
    let updatedRequest = requestedLimit + 20;

    updatedRequest <= constantsLength
      ? setRequestedLimit(updatedRequest)
      : setRequestedLimit(constantsLength);
  };

  let limitedNewswireConstant = getLimitedConstant(
    requestedLimit,
    newswireConstants
  );
  return (
    <Container>
      <NewswireCardRenderer isTopCard={true} constants={newswireConstants} />

      <div className="mes">
        <NewswireCardRenderer
          isTopCard={false}
          constants={[...limitedNewswireConstant]}
        />
      </div>
      <MoreStoriesButton click={updateCounter} text={"More Stories"} />
    </Container>
  );
}

export default Newswire;
