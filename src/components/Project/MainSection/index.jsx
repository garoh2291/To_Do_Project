import { useState } from "react";
import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const MainSection = ({
  isOpen,
  thisItemsArray,
  SetThisItemsArray,
  editModalOpen,
  getTasks,
}) => {
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
        getTasks={getTasks}
      />
      <Body
        isOpen={isMainHeaderOpen}
        thisItemsArray={thisItemsArray}
        SetThisItemsArray={SetThisItemsArray}
        editModalOpen={editModalOpen}
      />
    </div>
  );
};
