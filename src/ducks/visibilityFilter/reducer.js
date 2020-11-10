import { SET_FILTER, VISIBILITY_FILTERS } from "./constants";

export const initialState = VISIBILITY_FILTERS.ALL;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
}
