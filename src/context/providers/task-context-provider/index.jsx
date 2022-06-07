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

  return (
    <TaskDeleteBatchContext.Provider
      value={{
        taskBatchDeleteSet,
        setTaskBatchDeleteSet,
      }}
    >
      {children}
    </TaskDeleteBatchContext.Provider>
  );
};
