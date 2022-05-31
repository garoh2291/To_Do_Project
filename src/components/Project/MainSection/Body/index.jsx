import { useContext } from "react";
import { TaskContext } from "../../../../context";
import { PreLoader } from "../../../../PreLoader";
import "./styles.css";
import { TaskCard } from "./TaskCards";

export const Body = ({ isOpen, editModalOpen }) => {
  const { thisItemsArray } = useContext(TaskContext);
  if (!thisItemsArray) {
    return <PreLoader />;
  }

  return (
    <div
      className={isOpen ? "main-section-body-open" : "main-section-body-close"}
    >
      {thisItemsArray.map((task) => (
        <TaskCard
          taskInfo={task}
          key={task._id}
          editModalOpen={editModalOpen}
        />
      ))}
    </div>
  );
};
