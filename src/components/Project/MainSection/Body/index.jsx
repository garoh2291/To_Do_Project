import {
  BacklogColumn,
  DoneColumn,
  InProgressColumn,
  ToDoColumn,
} from "./BodyStages";
import "./styles.css";
export const Body = () => {
  return (
    <div className="main-section-body">
      <BacklogColumn stage="Backlog" />
      <ToDoColumn stage="ToDo" />
      <InProgressColumn stage="In Progress" />
      <DoneColumn stage="Done" />
    </div>
  );
};
