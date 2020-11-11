import React from "react";

import todoDuck from "../ducks/todos";
import Context from "../context";

export default class AddTodo extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    if (!this.state.input) return;
    this.context.dispatch(todoDuck.actions.addTodo(this.state.input));
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button
          className="add-todo"
          onClick={this.handleAddTodo}
          disabled={!this.state.input}
        >
          Add Todo
        </button>
      </div>
    );
  }
}
