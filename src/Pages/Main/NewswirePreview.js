import React from "react";
import { NewswireContainer } from "./styles";
import { CreateNewswireCards } from "../../Components/Newswire/index";
import { ViewMoreButton } from "../../Components/Buttons/ViewMoreButton";
import { newswireConstants } from "../../Constants/newswire";
import { getLimitedConstant } from "../../Helpers/getLimitedConstant";

function NewswirePreview() {
  let limitedNewswireConstant = getLimitedConstant(5, newswireConstants);
  
  return (
    <NewswireContainer>
      <h2>Newswire</h2>
      <CreateNewswireCards isPreview={true} showThisCards={[...limitedNewswireConstant]} />
      <ViewMoreButton text={"View More"} link={"/newswire"} />
    </NewswireContainer>
  );
}

export default NewswirePreview;
