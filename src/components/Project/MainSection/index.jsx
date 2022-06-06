import { useState } from "react";
import { TaskDeleteBatchMode } from "../../../context/providers/task-context-provider";
import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const MainSection = ({ isOpen, editModalOpen, getTasks }) => {
  const [isMainHeaderOpen, setIsMainHeaderOpen] = useState(false);

  const mainHeaderOpenHandler = () => {
    if (isMainHeaderOpen) {
      setIsMainHeaderOpen(false);
    } else {
      setIsMainHeaderOpen(true);
    }
  };

  return (
    <div className={isOpen ? "main-section-close" : "main-section-open"}>
      <Head
        onClick={mainHeaderOpenHandler}
        isOpen={isMainHeaderOpen}
        getTasks={getTasks}
      />
      <Body isOpen={isMainHeaderOpen} editModalOpen={editModalOpen} />
    </div>
  );
};
