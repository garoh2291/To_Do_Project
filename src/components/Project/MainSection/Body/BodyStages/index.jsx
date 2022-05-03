import { StageHeader } from "./StageHeader";
import "./styles.css";
import { TaskCard } from "./TaskCard";

export const BacklogColumn = ({ stage }) => {
  return (
    <div className="stage-colums">
      <StageHeader stage={stage} />
      <TaskCard
        header="Create layout"
        description="create some skin layout and make dinamic actions"
        isHighPriority={true}
        assigneeName="Garnik"
        assigneeSurname="Hovsepyan"
        created={new Date("2022-05-02").getTime()}
        issueType="bug"
      />
    </div>
  );
};

export const ToDoColumn = ({ stage }) => {
  return (
    <div className="stage-colums">
      <StageHeader stage={stage} />
      <TaskCard
        header="Add task cards"
        description="Create task card component and add in layout"
        isHighPriority={false}
        assigneeName="Armen"
        assigneeSurname="Asatryan"
        created={new Date("2022-04-20").getTime()}
        issueType="task"
      />
    </div>
  );
};

export const InProgressColumn = ({ stage }) => {
  return (
    <div className="stage-colums">
      <StageHeader stage={stage} />
    </div>
  );
};

export const DoneColumn = ({ stage }) => {
  return (
    <div className="stage-colums">
      <StageHeader stage={stage} />
    </div>
  );
};
