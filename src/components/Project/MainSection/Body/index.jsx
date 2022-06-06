import { useCallback, useContext, useState } from "react";
import { Button } from "reactstrap";
import { TaskContext, TaskDeleteBatchContext } from "../../../../context";
import { PreLoader } from "../../../../PreLoader";
import "./styles.css";
import { TaskCard } from "./TaskCards";

export const Body = ({ isOpen, editModalOpen }) => {
  const { thisItemsArray, SetThisItemsArray } = useContext(TaskContext);
  const { taskBatchDeleteSet, toggleDeletedTask, handleBatchDelete } =
    useContext(TaskDeleteBatchContext);

  const [taskDeleteBatchMode, setTaskDeleteBatchMode] = useState(false);

  const changeEditMode = () => {
    setTaskDeleteBatchMode((prev) => !prev);
  };

  if (!thisItemsArray) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="editor-mode">
        <i className="bx bxs-edit" onClick={changeEditMode}></i>
      </div>
      <div>
        {!!taskBatchDeleteSet.size && (
          <Button
            color="danger"
            onClick={() => handleBatchDelete(SetThisItemsArray)}
          >
            Delete All
          </Button>
        )}
      </div>
      <div
        className={
          isOpen ? "main-section-body-open" : "main-section-body-close"
        }
      >
        {thisItemsArray.map((task) => (
          <TaskCard
            taskInfo={task}
            key={task._id}
            editModalOpen={editModalOpen}
            toggleDeletedTask={toggleDeletedTask}
            taskDeleteBatchMode={taskDeleteBatchMode}
          />
        ))}
      </div>
    </>
  );
};
