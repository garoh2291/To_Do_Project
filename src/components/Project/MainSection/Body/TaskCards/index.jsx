import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { TaskContext } from "../../../../../context";

export const TaskCard = ({
  taskInfo,
  editModalOpen,
  toggleDeletedTask,
  taskDeleteBatchMode,
}) => {
  const { thisItemsArray, SetThisItemsArray } = useContext(TaskContext);
  const { title, description, status, _id } = taskInfo;

  const [taskStatus, setTaskStatus] = useState(status);
  const deleteHandle = () => {
    fetch(`https://todo-list-tco.herokuapp.com/task/${_id}`, {
      method: "DELETE",
    }).then((res) => {
      SetThisItemsArray(
        thisItemsArray.filter((task) => {
          return task._id !== _id;
        })
      );
    });
  };
  const statushandle = () => {
    fetch(`https://todo-list-tco.herokuapp.com/task/${_id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        status: taskStatus === "done" ? "backlog" : "done",
      }),
    })
      .then((res) => res.json())
      .then((task) => {
        setTaskStatus(task.status);
      });
  };
  return (
    <Card
      style={{ width: "300px", minHeight: "300px", marginTop: "5px" }}
      className="mx-2"
    >
      {taskDeleteBatchMode && (
        <div style={{ position: "absolute", right: "0" }}>
          <input type="checkbox" onClick={() => toggleDeletedTask(_id)} />
        </div>
      )}
      <CardImg
        alt="Card image cap"
        src="https://images.idgesg.net/images/article/2017/08/14_check-your-device-manager-100732276-large.jpg?auto=webp&quality=85,70"
        top
        width="100%"
      />
      <CardBody>
        <Link to={`/project/${_id}`}>
          {" "}
          <CardTitle tag="h5">{title}</CardTitle>
        </Link>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Description
        </CardSubtitle>
        <CardText
          style={{
            height: "40px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          title={description}
        >
          {description}
        </CardText>
        <Button
          title="Click to make Done"
          color={taskStatus === "done" ? "danger" : "success"}
          onClick={statushandle}
          className="mx-1"
        >
          {taskStatus}
        </Button>
        {taskDeleteBatchMode && (
          <Button
            color="primary"
            className="mx-1"
            onClick={() => editModalOpen(taskInfo)}
          >
            Edit
          </Button>
        )}
        <Button color="dark" onClick={deleteHandle}>
          Delete
        </Button>{" "}
      </CardBody>
    </Card>
  );
};
