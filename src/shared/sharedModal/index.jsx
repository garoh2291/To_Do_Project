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
import {
  isRequired,
  maxLength400,
  maxLength30,
  minLength3,
} from "../../helpers/validations";
import * as moment from "moment";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/task-slice";

export const AddTaskForm = ({ onSubmitCallback }) => {
  const [completeDate, setCompleteDate] = useState(new Date());
  const dispatch = useDispatch();
  const [inputsData, setInputsData] = useState({
    title: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength30],
    },
    description: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength400],
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://todo-list-tco.herokuapp.com/task", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        title: inputsData.title.value,
        description: inputsData.description.value,
        date: moment(completeDate).format("YYYY-MM-DD"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        dispatch(addTask({ data }));
      })
      .catch((err) => {
        console.log(err);
      });

    onSubmitCallback();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    const { validations } = inputsData[name];

    let error;

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

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input
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
          id="descriptionId"
          name="description"
          placeholder="Task description"
          type="text"
          onChange={handleChange}
          invalid={!!inputsData.description.error}
        />
        {!!inputsData.description.error && (
          <FormFeedback>{inputsData.description.error}</FormFeedback>
        )}
      </FormGroup>
      <DatePicker
        selected={completeDate}
        onChange={(date) => setCompleteDate(date)}
      />
      <Button color="primary" onClick={onSubmit}>
        Add Task
      </Button>{" "}
      <Button color="primary">Clear</Button>{" "}
    </Form>
  );
};
export const SharedModal = ({ onClose, SetThisItemsArray }) => {
  return (
    <Modal toggle={onClose} isOpen={true}>
      <ModalHeader toggle={onClose}>Add new task</ModalHeader>
      <ModalBody>
        <AddTaskForm onSubmitCallback={onClose} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
