import { useState } from "react";
import { SearchMethod } from "./CheckComponent";
import "./styles.css";
export const FilterContent = ({ isOpen, getTasks }) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const filterHandler = () => {
    if (isSectionOpen) {
      setIsSectionOpen(false);
    } else {
      setIsSectionOpen(true);
    }
  };

  return (
    <div className="filter-content">
      {isOpen ? (
        <div className="filer-section">
          <div className="filter-by" onClick={filterHandler}>
            <span>Filter by</span>
            <i class="filter-icon-by bx bx-filter"></i>
          </div>
          {isSectionOpen ? (
            <div className="filter-methods-open">
              <SearchMethod name="active" type="status" getTasks={getTasks} />
              <SearchMethod name="done" type="status" getTasks={getTasks} />
              <SearchMethod name="Created " />
              <SearchMethod name="Created" />
              <SearchMethod name="completed " />
              <SearchMethod name="completed " />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
