import React from "react";
import TodoItem from "./TodoItem";
import { Card, ListGroup } from "react-bootstrap";

const Todos = ({ todos, onComplete, onDelete }) => {
  return (
    <div className="mt-5 mb-5">
      <Card className="m-auto alertLocal">
        <ListGroup variant="flush">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Todos;
