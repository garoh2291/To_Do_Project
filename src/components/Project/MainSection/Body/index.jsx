import { StageColumn } from "./BodyStages";
import "./styles.css";
export const Body = ({ isOpen }) => {
  return (
    <div
      className={isOpen ? "main-section-body-open" : "main-section-body-close"}
    >
      <StageColumn stage="Backlog" />
      <StageColumn stage="ToDo" />
      <StageColumn stage="In Progress" />
      <StageColumn stage="Done" />
    </div>
  );
};
