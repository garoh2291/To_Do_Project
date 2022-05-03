import { useState } from "react";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
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
      <FilterSection isOpen={isFilterOpen} onClick={filterHandleClick} />
      <MainSection isOpen={isFilterOpen} />
    </div>
  );
};
