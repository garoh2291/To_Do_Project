import { useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { BACKEND_URL } from "../../data";
import {
  isRequired,
  maxLength30,
  maxLength400,
  minLength3,
} from "../../helpers/validations";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/task-slice";

const EditTaskForm = ({ onSubmitCallback, editModalTask }) => {
  const [inputsData, setInputsData] = useState({
    title: {
      value: editModalTask.title,
      error: undefined,
      validations: [isRequired, minLength3, maxLength30],
    },
    description: {
      value: editModalTask.description,
      error: undefined,
      validations: [isRequired, minLength3, maxLength400],
    },
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    let error;
    const { validations } = inputsData[name];

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;
        break;
      }
    }

    setInputsData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      title: { value: title },
      description: { value: description },
    } = inputsData;

    const editFormData = {
      title,
      description,
    };

    fetch(`${BACKEND_URL}/task/${editModalTask._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(editTask({ data }));
      });
    onSubmitCallback();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input
          value={inputsData.title.value}
          id="titleId"
          name="title"
          placeholder="Task title"
          type="text"
          onChange={handleChange}
          invalid={!!inputsData.title.error}
        />
        {!!inputsData.title.error && (
          <FormFeedback>{inputsData.title.error}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="descriptionId">Description</Label>
        <Input
          value={inputsData.description.value}
          id="descriptionId"
          name="description"
          placeholder="Task descriptionId"
          type="text"
          onChange={handleChange}
          invalid={!!inputsData.description.error}
        />
        {!!inputsData.description.error && (
          <FormFeedback>{inputsData.description.error}</FormFeedback>
        )}
      </FormGroup>
      {/* Date Picker */}
      <Button color="primary" onClick={onSubmit}>
        Edit Task
      </Button>{" "}
    </Form>
  );
};

export const EditModal = ({ onClose, editModalTask }) => {
  return (
    <Modal toggle={onClose} isOpen={true}>
      <ModalHeader toggle={onClose}>Edit Your task</ModalHeader>

      <ModalBody>
        <EditTaskForm
          onSubmitCallback={onClose}
          editModalTask={editModalTask}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
