import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button } from "reactstrap";
import { BackButton } from "../../components/SmallComponents/BackButton";
import { TaskStatusSide } from "../../components/SmallComponents/TaskStatusCard";
import { BACKEND_URL } from "../../data";
import { PreLoader } from "../../PreLoader";
import "./styles.css";

const EditFromSinglePage = ({ singleTask, setIsChangedSuccess }) => {
  const [editableData, setEditableData] = useState({
    "editable-header": {
      textContent: singleTask.title,
    },
    "editable-description": {
      textContent: singleTask.description,
    },
  });

  const [isbuttonEnabled, setIsButtonEnabled] = useState(true);

  const editHandler = (e) => {
    const { textContent, id } = e.target;

    setEditableData((prev) => {
      return {
        ...prev,
        [id]: {
          textContent,
        },
      };
    });

    setIsButtonEnabled(false);
  };

  const saveChangedInfo = () => {
    setIsChangedSuccess(true);

    const {
      "editable-header": { textContent: title },
      "editable-description": { textContent: description },
    } = editableData;
    const editFormData = {
      title,
      description,
    };

    fetch(`${BACKEND_URL}/task/${singleTask._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData),
    });

    setIsButtonEnabled((prev) => !prev);

    setIsChangedSuccess(() => {
      window.setTimeout(() => {
        setIsChangedSuccess(false);
      }, 2000);
    });
  };

  return (
    <div className="single-task-info">
      <h1
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={editHandler}
        id="editable-header"
        className="single-task-header"
      >
        {singleTask.title}
      </h1>
      <p
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={editHandler}
        id="editable-description"
        className="single-task-description"
      >
        {singleTask.description}
      </p>
      <Button
        className="my-5"
        color="success"
        disabled={isbuttonEnabled}
        onClick={saveChangedInfo}
      >
        Save
      </Button>
    </div>
  );
};

export const SingleTask = () => {
  const [singleTask, setSingleTask] = useState(null);
  const [isChangedSuccess, setIsChangedSuccess] = useState(false);

  const params = useParams();
  const taskId = params.taskId;
  const navigate = useNavigate();

  const prevPageHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/task/${taskId}`)
      .then((res) => res.json())
      .then((data) => setSingleTask(data));
  }, [taskId]);

  if (!singleTask) {
    return <PreLoader />;
  }

  return (
    <div className="single-task-wrapper">
      <BackButton handlerFunction={prevPageHandler} />
      <Alert
        style={{
          width: "30%",
          margin: "0 auto",
          position: "fixed",
          left: "35%",
          textAlign: "center",
          opacity: "0.8",
        }}
        color="success"
        isOpen={isChangedSuccess}
      >
        Success
      </Alert>

      <EditFromSinglePage
        singleTask={singleTask}
        setIsChangedSuccess={setIsChangedSuccess}
      />
      <TaskStatusSide task={singleTask} />
    </div>
  );
};
