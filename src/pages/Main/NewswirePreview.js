import React from "react";
import { StyledNewswireCards } from "./styles";
import { getLimitedConstant } from "../../helpers/getLimitedConstant";

//Components
import NewswireCardRenderer from "../../components/NewswireCardRenderer/index";
import ViewAndMoreButtons from "../../components/Buttons/ViewAndMoreButtons";
import { newswireConstants } from "../../constants/newswire";

function NewswirePreview() {
  let limitedNewswireConstant = getLimitedConstant(5, newswireConstants);

  return (
    <StyledNewswireCards>
      <h2>Newswire</h2>
      <NewswireCardRenderer
        isPreview={true}
        constants={[...limitedNewswireConstant]}
      />
      <ViewAndMoreButtons text="View More" link="/newswire" />
    </StyledNewswireCards>
  );
}

export default NewswirePreview;
