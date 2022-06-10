import { useCallback, useState } from "react";
import { Button } from "reactstrap";
import { PreLoader } from "../../../../PreLoader";
import "./styles.css";
import { TaskCard } from "./TaskCards";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTaskThunk,
  removeMultitapleTasksThunk,
} from "../../../../redux/task-slice";

export const Body = ({ isOpen, editModalOpen }) => {
  const { tasks, status, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [deletedTasksSet, setDeletedTasksSet] = useState(new Set());

  const [taskDeleteBatchMode, setTaskDeleteBatchMode] = useState(false);

  const toggleDeletedTask = useCallback((_id) => {
    setDeletedTasksSet((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(_id)) {
        newSet.delete(_id);
      } else {
        newSet.add(_id);
      }
      return newSet;
    });
  }, []);

  const deleteHandle = (_id) => {
    dispatch(deleteTaskThunk(_id));
  };

  const handleBatchDelete = (setFunc) => {
    const batchDelTasks = Array.from(deletedTasksSet);
    deletedTasksSet.clear();
    dispatch(removeMultitapleTasksThunk(batchDelTasks));
  };

  const changeEditMode = () => {
    setTaskDeleteBatchMode((prev) => !prev);
  };

  if (!tasks) {
    return <PreLoader />;
  }
  if (tasks.length === 0) {
    return <h2>No Tasks</h2>;
  }

  return (
    <>
      <div className="editor-mode">
        <i className="bx bxs-edit" onClick={changeEditMode}></i>
      </div>
      <div>
        {!!deletedTasksSet.size && (
          <Button color="danger" onClick={() => handleBatchDelete()}>
            Delete All
          </Button>
        )}
      </div>
      <div
        className={
          isOpen ? "main-section-body-open" : "main-section-body-close"
        }
      >
        {error && <h2>An error occured : {error}</h2>}
        {tasks.map((task) => (
          <TaskCard
            taskInfo={task}
            key={task._id}
            editModalOpen={editModalOpen}
            toggleDeletedTask={toggleDeletedTask}
            taskDeleteBatchMode={taskDeleteBatchMode}
            deleteHandle={deleteHandle}
          />
        ))}
      </div>
    </>
  );
};
