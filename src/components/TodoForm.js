import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";

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
      <Form className="mt-5" onSubmit={onSubmitEvent}>
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
        <Form.Group className="d-flex ">
          <Form.Control
            className="lead"
            style={{ height: "50px", fontSize: "18px" }}
            type="text"
            onChange={onChange}
            value={inputText}
            placeholder="Add a todo..."
          />
          <input
            type="submit"
            value="Add"
            className="btn btn-success add-btn"
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default TodoForm;
