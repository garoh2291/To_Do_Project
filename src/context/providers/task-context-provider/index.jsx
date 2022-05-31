import { useState } from "react";
import { TaskContext } from "../..";

export const TaskContextProvider = ({ children }) => {
  const [thisItemsArray, SetThisItemsArray] = useState("");

  return (
    <TaskContext.Provider value={{ thisItemsArray, SetThisItemsArray }}>
      {children}
    </TaskContext.Provider>
  );
};
