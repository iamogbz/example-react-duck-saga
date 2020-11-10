import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "../redux/connect";
import todoDuck from "../ducks/todos";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = createStructuredSelector({
  todos: todoDuck.selectors.getTodosByVisibilityFilter,
});

export default connect(mapStateToProps)(TodoList);
