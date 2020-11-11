import { applyMiddleware, createContext, createRootDuck } from "react-ducks";
import createSagaMiddleware from "redux-saga";

import todoDuck from "./ducks/todos";
import visibilityFilterDuck from "./ducks/visibilityFilter";
import todoSaga from "./ducks/todos/sagas";

const rootDuck = createRootDuck(todoDuck, visibilityFilterDuck);

const rootSagaMiddleware = (...args) => {
  const sagaMiddleware = createSagaMiddleware();
  const result = sagaMiddleware(...args);
  // An alternative is to have this run on component mount
  // otherwise the context provider component will not get
  // the chance to apply the middleware enhancers on render
  sagaMiddleware.run(todoSaga);
  return result;
};

export default createContext(
  rootDuck.reducer,
  rootDuck.initialState,
  applyMiddleware(rootSagaMiddleware),
  "GlobalContext",
  true
);
