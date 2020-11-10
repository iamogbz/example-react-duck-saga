import { createDuck } from "react-ducks";
import { DUCK_NAME } from "./constants";
import { getTodosByVisibilityFilter } from "./selectors";

export default createDuck({
  name: DUCK_NAME,
  initialState: {
    allIds: [],
    byIds: {}
  },
  reducers: {
    addTodo: (state, action) => {
      const id = (state.allIds.slice(-1)[0] ?? 0) + 1;
      state.allIds.push(id);
      state.byIds[id] = {
        content: action.payload,
        completed: false
      };
      return state;
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      state.byIds[id].completed = !state.byIds[id].completed;
      return state;
    }
  },
  selectors: { getTodosByVisibilityFilter }
});
