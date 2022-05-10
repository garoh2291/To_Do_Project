import "./styles.css";
export const FilterHeader = ({ isOpen, onClick }) => {
  return (
    <div className="filter-header">
      {isOpen ? (
        <h6 className="filter-header-text">Filters</h6>
      ) : (
        <i class="filter-small-icon bx bx-filter-alt" onClick={onClick}></i>
      )}
    </div>
  );
};
