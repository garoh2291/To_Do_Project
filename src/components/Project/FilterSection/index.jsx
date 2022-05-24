import { FilterContent } from "./FilterContent";
import { FilterHeader } from "./FilterHeading";
import "./styles.css";
export const FilterSection = ({ isOpen, onClick, getTasks }) => {
  return (
    <div className={isOpen ? "filter-section-open" : "filter-section-close"}>
      <i
        onClick={onClick}
        className={`filter-button ${
          isOpen ? "bx bx-left-arrow-alt" : "bx bx-right-arrow-alt"
        }`}
      ></i>
      <FilterHeader isOpen={isOpen} onClick={onClick} />
      <FilterContent isOpen={isOpen} getTasks={getTasks} />
    </div>
  );
};
