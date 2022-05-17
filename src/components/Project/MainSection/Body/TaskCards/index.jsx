import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export const TaskCard = ({ taskInfo, SetThisItemsArray, thisItemsArray }) => {
  const { title, description, status, _id } = taskInfo;
  const [taskStatus, setTaskStatus] = useState(status);
  const deleteHandle = () => {
    fetch(`http://localhost:3001/task/${_id}`, {
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
    fetch(`http://localhost:3001/task/${_id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        status: taskStatus === "done" ? "active" : "done",
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
      <CardImg
        alt="Card image cap"
        src="https://images.idgesg.net/images/article/2017/08/14_check-your-device-manager-100732276-large.jpg?auto=webp&quality=85,70"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
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
        >
          {taskStatus}
        </Button>
        <Button color="dark" className="mx-2" onClick={deleteHandle}>
          Delete
        </Button>{" "}
      </CardBody>
    </Card>
  );
};
