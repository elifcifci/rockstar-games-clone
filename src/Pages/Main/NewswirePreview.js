import React from "react";
import { NewswireCards } from "./styles";
import { NewswireCardRenderer } from "../../Components/NewswireCardRenderer/index";
import { MoreButtons } from "../../Components/Buttons/MoreButtons";
import { newswireConstants } from "../../Constants/newswire";
import { getLimitedConstant } from "../../Helpers/getLimitedConstant";

function NewswirePreview() {
  let limitedNewswireConstant = getLimitedConstant(5, newswireConstants);
  
  return (
    <NewswireCards>
      <h2>Newswire</h2>
      <NewswireCardRenderer isPreview={true} constants={[...limitedNewswireConstant]} />
      <MoreButtons text="View More" link="/newswire" />
    </NewswireCards>
  );
}

export default NewswirePreview;
