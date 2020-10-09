import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const TodoForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [alert, setAlert] = useState(false);
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onSubmitEvent = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      setAlert(true);
      setInputText("");
    } else {
      onSubmit(inputText);
      setInputText("");
    }
  };
  return (
    <>
      <Form className="mt-5">
        {alert ? (
          <Alert
            className="alertLocal"
            key="4"
            variant="danger"
            onClose={() => setAlert(false)}
            dismissible
          >
            A todo cannot be empty.
          </Alert>
        ) : null}
        <Form.Group className="d-flex">
          <Form.Control
            className="lead"
            style={{ height: "50px", fontSize: "18px" }}
            type="text"
            onChange={onChange}
            value={inputText}
            placeholder="Add a todo..."
          />
          <Button className="ml-3 btn btn-success" onClick={onSubmitEvent}>
            add
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default TodoForm;
