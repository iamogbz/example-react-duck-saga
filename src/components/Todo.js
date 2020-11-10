import React from "react";
import cx from "classnames";
import { connect } from "../redux/connect";
import todoDuck from "../ducks/todos";

const Todo = ({ todo, toggleTodo }) => (
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

export default connect(
  null,
  { toggleTodo: todoDuck.actions.toggleTodo }
)(Todo);
