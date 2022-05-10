import {
  BacklogColumn,
  DoneColumn,
  InProgressColumn,
  ToDoColumn,
} from "./BodyStages";
import "./styles.css";
export const Body = ({ isOpen }) => {
  return (
    <div
      className={isOpen ? "main-section-body-open" : "main-section-body-close"}
    >
      <BacklogColumn stage="Backlog" />
      <ToDoColumn stage="ToDo" />
      <InProgressColumn stage="In Progress" />
      <DoneColumn stage="Done" />
    </div>
  );
};
