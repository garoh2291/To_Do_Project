import { useCallback, useEffect, useState } from "react";
import { getTasksRequest } from "../../api";
import { EditModal } from "../../shared/editModal";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
  const [thisItemsArray, SetThisItemsArray] = useState([]);

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
  const generateQuery = (_searchSortQuery) => {
    let query = "";
    searchSortQuery.forEach((item) => {
      if (item.queryValue !== "") {
        return (query += `${item.queryRoute}=${item.queryValue}&`);
      }
    });
    return query;
  };

  useEffect(() => {
    const query = generateQuery(searchSortQuery);

    if (!query) {
      getTasksRequest().then((data) => {
        SetThisItemsArray(data);
      });
    } else {
      getTasksRequest(query).then((data) => {
        SetThisItemsArray(data);
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
      <FilterSection
        isOpen={isFilterOpen}
        onClick={filterHandleClick}
        thisItemsArray={thisItemsArray}
        SetThisItemsArray={SetThisItemsArray}
        getTasks={getTasksClosure}
      />
      <MainSection
        isOpen={isFilterOpen}
        thisItemsArray={thisItemsArray}
        SetThisItemsArray={SetThisItemsArray}
        editModalOpen={editModalOpen}
        getTasks={getTasksClosure}
      />
      {isEditOpen && (
        <EditModal
          onClose={() => setIsEditOpen(false)}
          SetThisItemsArray={SetThisItemsArray}
          editModalTask={editModalTask}
        />
      )}
    </div>
  );
};
