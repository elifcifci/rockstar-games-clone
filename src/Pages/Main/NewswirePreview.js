import React from "react";
import { NewswireCards } from "./styles";
import { NewswireCardRenderer } from "../../Components/NewswireCardRenderer/index";
import { ViewMoreButtons } from "../../Components/Buttons/ViewMoreButton";
import { newswireConstants } from "../../Constants/newswire";
import { getLimitedConstant } from "../../Helpers/getLimitedConstant";

function NewswirePreview() {
  let limitedNewswireConstant = getLimitedConstant(5, newswireConstants);
  
  return (
    <NewswireCards>
      <h2>Newswire</h2>
      <NewswireCardRenderer isPreview={true} constants={[...limitedNewswireConstant]} />
      <ViewMoreButtons text={"View More"} link={"/newswire"} />
    </NewswireCards>
  );
}

export default NewswirePreview;
