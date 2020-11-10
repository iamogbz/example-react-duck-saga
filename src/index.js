import React from "react";
import ReactDOM from "react-dom";
import { createRootProvider } from "react-ducks";

import Context from "./redux/context";

import TodoApp from "./TodoApp";

const Provider = createRootProvider(Context);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <TodoApp />
  </Provider>,
  rootElement,
);
