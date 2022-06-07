import { useCallback, useState } from "react";
import { Button } from "reactstrap";
import { PreLoader } from "../../../../PreLoader";
import "./styles.css";
import { TaskCard } from "./TaskCards";
import { useSelector, useDispatch } from "react-redux";
import { BACKEND_URL } from "../../../../data";
import { removeMultitapleTasks } from "../../../../redux/task-slice";

export const Body = ({ isOpen, editModalOpen }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
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

  const handleBatchDelete = (setFunc) => {
    const batchDelTasks = Array.from(deletedTasksSet);
    fetch(`${BACKEND_URL}/task`, {
      method: "PATCH",
      body: JSON.stringify({
        tasks: batchDelTasks,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(removeMultitapleTasks({ batchDelTasks }));

        deletedTasksSet.clear();
      });
  };

  const changeEditMode = () => {
    setTaskDeleteBatchMode((prev) => !prev);
  };

  if (tasks.length === 0) {
    return <PreLoader />;
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
        {tasks.map((task) => (
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
