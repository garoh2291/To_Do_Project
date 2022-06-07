import { useCallback, useEffect, useState } from "react";
import { getTasksRequest } from "../../api";
import { useDispatch } from "react-redux";
import { TaskDeleteBatchProvider } from "../../context/providers/task-context-provider";
import { EditModal } from "../../shared/editModal";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";
import { setTasks } from "../../redux/task-slice";
import { generateQuery } from "../../helpers";

export const Project = () => {
  const dispatch = useDispatch();

  ////////added by Garnik
  const [searchSortQuery, setSearchSortQuery] = useState([]);

  const getTasksClosure = (filterEntries) => {
    const newArr = searchSortQuery.filter((item) => {
      return item.queryRoute === filterEntries.queryRoute;
    });
    if (newArr.length === 0) {
      setSearchSortQuery((prev) => {
        return [...prev, filterEntries];
      });
    } else {
      setSearchSortQuery((prev) => {
        return searchSortQuery.map((item) => {
          if (item.queryRoute === filterEntries.queryRoute) {
            return filterEntries;
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    const query = generateQuery(searchSortQuery);

    if (!query) {
      getTasksRequest().then((data) => {
        dispatch(setTasks({ data }));
      });
    } else {
      getTasksRequest(query).then((data) => {
        dispatch(setTasks({ data }));
      });
    }
  }, [searchSortQuery]);

  ////////////////

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editModalTask, setEditModalTask] = useState(null);

  const editModalOpen = useCallback(
    (task) => {
      if (isEditOpen) {
        setIsEditOpen(false);
        setEditModalTask(null);
      } else {
        setIsEditOpen(true);
        setEditModalTask(task);
      }
    },
    [isEditOpen]
  );

  const filterHandleClick = () => {
    if (isFilterOpen) {
      setIsFilterOpen(false);
    } else {
      setIsFilterOpen(true);
    }
  };
  return (
    <div className="project-layout">
      <TaskDeleteBatchProvider>
        <FilterSection
          isOpen={isFilterOpen}
          onClick={filterHandleClick}
          getTasks={getTasksClosure}
        />
        <MainSection
          isOpen={isFilterOpen}
          editModalOpen={editModalOpen}
          getTasks={getTasksClosure}
        />
        {isEditOpen && (
          <EditModal
            onClose={() => setIsEditOpen(false)}
            editModalTask={editModalTask}
          />
        )}
      </TaskDeleteBatchProvider>
    </div>
  );
};
