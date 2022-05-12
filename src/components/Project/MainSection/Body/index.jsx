import { useEffect, useState } from "react";
import "./styles.css";
import { TaskCard } from "./TaskCards";

export const Body = ({ isOpen }) => {
  const [thisItemsArray, SetThisItemsArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/task")
      .then((res) => res.json())
      .then((data) => SetThisItemsArray(data));
  }, []);

  return (
    <div
      className={isOpen ? "main-section-body-open" : "main-section-body-close"}
    >
      {thisItemsArray.map((task) => (
        <TaskCard taskInfo={task} key={task._id} />
      ))}
    </div>
  );
};
