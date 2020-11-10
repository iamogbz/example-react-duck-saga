import { createDuck } from "react-ducks";
import { ADD_TODO, DUCK_NAME, TOGGLE_TODO } from "./constants";
import reducer, { initialState } from "./reducer";
import { getTodosByVisibilityFilter } from "./selectors";

export default createDuck({
  name: DUCK_NAME,
  reducers: {
    [ADD_TODO]: reducer,
    [TOGGLE_TODO]: reducer,
  },
  initialState,
  selectors: { getTodosByVisibilityFilter },
});
