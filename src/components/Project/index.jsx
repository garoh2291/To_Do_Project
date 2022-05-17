import { useEffect, useState } from "react";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
  const [thisItemsArray, SetThisItemsArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/task")
      .then((res) => res.json())
      .then((data) => SetThisItemsArray(data));
  }, []);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterHandleClick = () => {
    if (isFilterOpen) {
      setIsFilterOpen(false);
    } else {
      setIsFilterOpen(true);
    }
    console.log(isFilterOpen);
  };
  return (
    <div className="project-layout">
      <FilterSection
        isOpen={isFilterOpen}
        onClick={filterHandleClick}
        thisItemsArray={thisItemsArray}
        SetThisItemsArray={SetThisItemsArray}
      />
      <MainSection
        isOpen={isFilterOpen}
        thisItemsArray={thisItemsArray}
        SetThisItemsArray={SetThisItemsArray}
      />
    </div>
  );
};
