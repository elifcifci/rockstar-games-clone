import React, { useState, useEffect } from "react";
import { countCardsNumber } from "../../Components/Newswire/cardCounter";
import { CreateNewswireCards } from "../../Components/Newswire/index";
import { Button } from "../../Components/Button";

function Newswire() {
  let [counter, setCounter] = useState(19);
  useEffect(() => {
    console.log("counter: ", counter);
  }, [counter]);

  let updateCounter = () => {
    setCounter((counter += 20));
  };

  console.log("TEST");

  let countedCards = countCardsNumber(counter);
  return (
    <>
      <CreateNewswireCards showThisCards={[...countedCards]} />
      <Button onClick={updateCounter} text={"More Stories"}/>
    </>
  );
}

export default Newswire;
