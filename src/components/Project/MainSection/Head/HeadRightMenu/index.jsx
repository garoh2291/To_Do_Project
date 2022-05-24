import { useState } from "react";
import { Button, Input } from "reactstrap";
import { SharedModal } from "../../../../../shared/sharedModal";
import "./styles.css";

const SortSelect = ({ handleSort }) => {
  return (
    <Input name="sort_by" type="select" onChange={handleSort}>
      <option value={"creation_date_newest"}>Created newest</option>
      <option value={"creation_date_oldest"}>Completed oldest</option>
      <option value={"completion_date_newest"}>Completed newest</option>
      <option value={"completion_date_oldest"}>Completed oldest</option>
      <option value={"a-z"}>A - Z</option>
      <option value={"z-a"}>Z - A</option>
    </Input>
  );
};

const SearchInput = ({ handleSearch }) => {
  return (
    <Input
      type="search"
      placeholder="Search description"
      name="search"
      onChange={handleSearch}
    ></Input>
  );
};

export const HeadRightMenu = ({ isOpen, SetThisItemsArray, getTasks }) => {
  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
  const handleBtnClick = () => {
    if (isShowAddTaskModal) {
      setIsShowAddTaskModal(false);
    } else {
      setIsShowAddTaskModal(true);
    }
  };

  ////////////////////////////////////////////////////////////////
  const handleSort = (event) => {
    const { value } = event.target;
    getTasks({
      queryRoute: "sort",
      queryValue: value,
    });
  };
  const handleSearch = (event) => {
    const { value } = event.target;
    getTasks({
      queryRoute: "search",
      queryValue: value,
    });
  };
  ////////////////////////////
  return (
    <div
      className={
        isOpen ? "main-section-head-right-show" : "main-section-head-right-hide"
      }
    >
      <Button
        color="primary"
        outline
        style={{ width: "100%" }}
        onClick={handleBtnClick}
      >
        Add New Task
      </Button>{" "}
      <SortSelect handleSort={handleSort} />
      <SearchInput handleSearch={handleSearch} />
      {isShowAddTaskModal && (
        <SharedModal
          SetThisItemsArray={SetThisItemsArray}
          onClose={() => {
            setIsShowAddTaskModal(false);
          }}
        />
      )}
    </div>
  );
};
