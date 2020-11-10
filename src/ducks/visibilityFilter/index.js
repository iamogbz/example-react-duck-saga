import { createDuck } from "react-ducks";

export const VISIBILITY_FILTERS = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete"
};

export default createDuck({
  name: "visibilityFilter",
  reducers: { setFilter: (_, action) => action.payload.filter },
  initialState: VISIBILITY_FILTERS.ALL
});
