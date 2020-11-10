import { ADD_TODO, TOGGLE_TODO } from "./constants";

export const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      state.allIds.push(id);
      state.byIds[id] = {
        content,
        completed: false
      };
      return state;
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      state.byIds[id].completed = !state.byIds[id].completed;
      return state;
    }
    default:
      return state;
  }
}
