import { useCallback, useState } from "react";
import { Button, Input } from "reactstrap";
import { SharedModal } from "../../../../../shared/sharedModal";
import "./styles.css";

const SortSelect = ({ changeSortHandler }) => {
  return (
    <Input name="sort_by" type="select" onChange={changeSortHandler}>
      <option value={"creation_date_newest"}>Created newest</option>
      <option value={"creation_date_oldest"}>Completed oldest</option>
      <option value={"completion_date_newest"}>Completed newest</option>
      <option value={"completion_date_oldest"}>Completed oldest</option>
      <option value={"a-z"}>A - Z</option>
      <option value={"z-a"}>Z - A</option>
    </Input>
  );
};

const SearchInput = ({ searchChange }) => {
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

  ////////////////////////////////////////////////////////////////

  // const [sortQueryText, setSortQueryText] = useState(null);
  // const [searchQueryText, setSearchSortQueryText] = useState(null);

  // const queryCallBack = () => {
  //   fetch(`http://localhost:3001/task?search=${searchQueryText}`)
  //     .then((res) => res.json())
  //     .then((data) => SetThisItemsArray(data));
  // };

  /// sort
  const changeSortHandler = useCallback(
    (e) => {
      e.preventDefault();
      const { value } = e.target;
      fetch(`http://localhost:3001/task?sort=${value}`)
        .then((res) => res.json())
        .then((data) => SetThisItemsArray(data));
    },
    [SetThisItemsArray]
  );
  ////search
  const searchChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    fetch(`http://localhost:3001/task?search=${value}`)
      .then((res) => res.json())
      .then((data) => SetThisItemsArray(data));
  };
  ///////////

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
      <SortSelect changeSortHandler={changeSortHandler} />
      <SearchInput searchChange={searchChange} />
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
