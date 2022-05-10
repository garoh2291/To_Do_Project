import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./styles.css";

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div>
      <Button
        onClick={openModal}
        color="primary"
        outline
        style={{ width: "100%" }}
      >
        Add New Task
      </Button>
      <Modal isOpen={isOpen}>
        <ModalHeader charCode="Y" toggle={openModal}>
          Modal title
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Do Something
          </Button>{" "}
          <Button onClick={openModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const SortSelect = () => {
  return (
    <Input name="sort_by" type="select">
      <option>Sort By</option>
      <option>Newest First</option>
      <option>Oldest First</option>
      <option>Todo at Newest</option>
    </Input>
  );
};

const SearchInput = () => {
  return <Input type="search" placeholder="Search" name="search"></Input>;
};

export const HeadRightMenu = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen ? "main-section-head-right-show" : "main-section-head-right-hide"
      }
    >
      <ModalButton />
      <SortSelect />
      <SearchInput />
    </div>
  );
};
