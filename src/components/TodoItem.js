import React from "react";
import { ListGroup } from "react-bootstrap";

const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <>
      <ListGroup.Item className="lead d-flex justify-content-between">
        <p className={todo.completed ? "cut" : "noCut"}>{todo.title}</p>
        <div className="d-flex justify-content-around ml-3">
          {todo.completed ? (
            <i
              className="fas fa-times mr-3 incompleteBTN"
              onClick={() => onComplete(todo.id)}
            ></i>
          ) : (
            <i
              className="fas fa-check mr-3 completeBTN"
              onClick={() => onComplete(todo.id)}
            ></i>
          )}
          <i
            className="fas fa-trash deleteBTN"
            onClick={() => {
              onDelete(todo.id);
            }}
          ></i>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default TodoItem;
