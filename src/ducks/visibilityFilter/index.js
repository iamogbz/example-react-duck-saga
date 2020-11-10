import { createDuck } from "react-duck";
import { DUCK_NAME, SET_FILTER } from "./constants";
import reducer, { initialState } from "./reducer";
import { getVisibilityFiltersState } from "./selectors";

export { VISIBILITY_FILTERS } from "./constants";
export { setFilter } from "./actions";

export default createDuck({
  name: DUCK_NAME,
  reducers: { [SET_FILTER]: reducer },
  initialState,
  selectors: { $: getVisibilityFiltersState },
});
