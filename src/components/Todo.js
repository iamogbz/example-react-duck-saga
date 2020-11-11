import React from "react";
import cx from "classnames";
import { useDispatch } from "react-ducks";

import todoDuck from "../ducks/todos";

export default function Todo({ todo }) {
  const toggleTodo = useDispatch(todoDuck.actions.toggleTodo);

  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
}
