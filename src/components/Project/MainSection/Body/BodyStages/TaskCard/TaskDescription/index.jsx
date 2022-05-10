import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const TaskDescription = ({ isOpen, onClick, obj, openedTime }) => {
  const {
    header,
    description,
    isHighPriority,
    assigneeName,
    assigneeSurname,
    created,
    issueType,
  } = obj;
  return (
    <Modal isOpen={isOpen} size="lg">
      <ModalHeader charCode="Y" toggle={onClick}>
        {header}
      </ModalHeader>
      <ModalBody>
        <p>Description</p>
        <p style={{ borderBottom: "1px solid #c7c7c7" }}>{description}</p>

        <p>
          Priority ::
          {` ${isHighPriority ? "High" : "Low"}`}
        </p>
        <p>
          Opened ::
          {` ${openedTime} days`}
        </p>
        <p>
          Assignee ::
          {` ${assigneeName} ${assigneeSurname}`}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={function noRefCheck() {}}>
          Stage
        </Button>{" "}
        <Button onClick={onClick}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
