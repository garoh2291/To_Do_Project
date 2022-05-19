import { useCallback, useEffect, useState } from "react";
import { EditModal } from "../../shared/editModal";
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

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editModalTask, setEditModalTask] = useState(null);

  const editModalOpen = useCallback(
    (task) => {
      if (isEditOpen) {
        setIsEditOpen(false);
        setEditModalTask(null);
      } else {
        setIsEditOpen(true);
        setEditModalTask(task);
      }
    },
    [isEditOpen]
  );

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
        editModalOpen={editModalOpen}
      />
      {isEditOpen && (
        <EditModal
          onClose={() => setIsEditOpen(false)}
          SetThisItemsArray={SetThisItemsArray}
          editModalTask={editModalTask}
        />
      )}
    </div>
  );
};
