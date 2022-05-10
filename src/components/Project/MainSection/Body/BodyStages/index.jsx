import { TODO_LIST_MOCK_DATA } from "../../../../../mockdata";
import { StageHeader } from "./StageHeader";
import "./styles.css";
import { TaskCard } from "./TaskCard";

export const StageColumn = ({ stage }) => {
  const stageItems = TODO_LIST_MOCK_DATA.filter((item) => {
    return item.stage === stage;
  });
  return (
    <div className="stage-colums">
      <StageHeader stage={stage} />
      {stageItems.map((card) => {
        return <TaskCard obj={card} key={card._id} />;
      })}
    </div>
  );
};
