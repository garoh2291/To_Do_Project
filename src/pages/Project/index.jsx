import { Project } from "../../components/Project";
import { TaskContextProvider } from "../../context/providers/task-context-provider";

export const ProjectPage = () => {
  return (
    <div>
      <TaskContextProvider>
        <Project />
      </TaskContextProvider>
    </div>
  );
};
