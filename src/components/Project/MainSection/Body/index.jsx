import "./styles.css";
import { TaskCard } from "./TaskCards";

export const Body = ({
  isOpen,
  thisItemsArray,
  SetThisItemsArray,
  editModalOpen,
}) => {
  return (
    <div
      className={isOpen ? "main-section-body-open" : "main-section-body-close"}
    >
      {thisItemsArray.map((task) => (
        <TaskCard
          taskInfo={task}
          key={task._id}
          SetThisItemsArray={SetThisItemsArray}
          thisItemsArray={thisItemsArray}
          editModalOpen={editModalOpen}
        />
      ))}
    </div>
  );
};
