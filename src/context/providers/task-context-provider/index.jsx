import { useCallback, useState } from "react";
import { LoggedUser, TaskContext, TaskDeleteBatchContext } from "../..";
import { BACKEND_URL } from "../../../data";

export const TaskContextProvider = ({ children }) => {
  const [thisItemsArray, SetThisItemsArray] = useState("");

  return (
    <TaskContext.Provider value={{ thisItemsArray, SetThisItemsArray }}>
      {children}
    </TaskContext.Provider>
  );
};

export const LoggedUserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
  return (
    <LoggedUser.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </LoggedUser.Provider>
  );
};

export const TaskDeleteBatchProvider = ({ children }) => {
  const [taskBatchDeleteSet, setTaskBatchDeleteSet] = useState(new Set());

  const toggleDeletedTask = useCallback((_id) => {
    setTaskBatchDeleteSet((prev) => {
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
    const batchDelTasks = Array.from(taskBatchDeleteSet);
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
        setFunc((prev) => {
          return prev.filter((task) => !batchDelTasks.includes(task._id));
        });
        taskBatchDeleteSet.clear();
      });
  };

  return (
    <TaskDeleteBatchContext.Provider
      value={{
        taskBatchDeleteSet,
        setTaskBatchDeleteSet,
        toggleDeletedTask,
        handleBatchDelete,
      }}
    >
      {children}
    </TaskDeleteBatchContext.Provider>
  );
};
