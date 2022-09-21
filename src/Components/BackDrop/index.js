import React from "react";
import {BackDropContainer} from "./styles"

const BackDrop = ({toggle}) => {
return <BackDropContainer onClick={toggle}></BackDropContainer>
}

export default BackDrop;