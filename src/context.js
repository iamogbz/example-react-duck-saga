import { applyMiddleware, createContext, createRootDuck } from "react-ducks";
import createSagaMiddleware from "redux-saga";

const rootDuck = createRootDuck(
  require("./ducks/todos").default,
  require("./ducks/visibilityFilter").default
);

const rootSagaMiddleware = (...args) => {
  const sagaMiddleware = createSagaMiddleware();
  const result = sagaMiddleware(...args);
  // An alternative is to have this run on component mount
  // otherwise the context provider component will not get
  // the chance to apply the middleware enhancers on render
  sagaMiddleware.run(require("./ducks/todos/sagas").default);
  return result;
};

export default createContext(
  rootDuck.reducer,
  rootDuck.initialState,
  applyMiddleware(rootSagaMiddleware),
  "GlobalContext",
  true
);
