import { useState } from "react";
import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const MainSection = ({ isOpen, thisItemsArray, SetThisItemsArray }) => {
  const [isMainHeaderOpen, setIsMainHeaderOpen] = useState(false);
  const mainHeaderOpenHandler = () => {
    if (isMainHeaderOpen) {
      setIsMainHeaderOpen(false);
    } else {
      setIsMainHeaderOpen(true);
    }
  };

  return (
    <div className={isOpen ? "main-section-close" : "main-section-open"}>
      <Head
        onClick={mainHeaderOpenHandler}
        isOpen={isMainHeaderOpen}
        SetThisItemsArray={SetThisItemsArray}
        thisItemsArray={thisItemsArray}
      />
      <Body
        isOpen={isMainHeaderOpen}
        thisItemsArray={thisItemsArray}
        SetThisItemsArray={SetThisItemsArray}
      />
    </div>
  );
};
