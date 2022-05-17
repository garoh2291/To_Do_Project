import { useState } from "react";
import { Button, Input } from "reactstrap";
import { SharedModal } from "../../../../../shared/sharedModal";
import "./styles.css";

const SortSelect = () => {
  return (
    <Input name="sort_by" type="select">
      <option>Sort By</option>
      <option>Newest First</option>
      <option>Oldest First</option>
      <option>Todo at Newest</option>
    </Input>
  );
};

const SearchInput = ({ thisItemsArray, SetThisItemsArray }) => {
  const searchChange = (e) => {
    const { value } = e.target;
    fetch(`http://localhost:3001/task?search=${value}`)
      .then((res) => res.json())
      .then((data) => SetThisItemsArray(data));
  };
  return (
    <Input
      type="search"
      placeholder="Search description"
      name="search"
      onChange={searchChange}
    ></Input>
  );
};

export const HeadRightMenu = ({
  isOpen,
  SetThisItemsArray,
  thisItemsArray,
}) => {
  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
  const handleBtnClick = () => {
    if (isShowAddTaskModal) {
      setIsShowAddTaskModal(false);
    } else {
      setIsShowAddTaskModal(true);
    }
  };
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
      <SortSelect />
      <SearchInput
        SetThisItemsArray={SetThisItemsArray}
        thisItemsArray={thisItemsArray}
      />
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
