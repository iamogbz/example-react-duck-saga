import React from "react";
import { useSelector } from "react-ducks";

import todoDuck from "../ducks/todos";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector(todoDuck.selectors.getTodosByVisibilityFilter);
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map(todo => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
}
