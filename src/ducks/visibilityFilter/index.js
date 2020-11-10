import { createDuck } from "react-ducks";

export const VISIBILITY_FILTERS = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete"
};

export default createDuck({
  name: "visibilityFilter",
  initialState: VISIBILITY_FILTERS.ALL,
  reducers: {
    setFilter: (_, action) => action.payload
  }
});
