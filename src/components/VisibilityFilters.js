import React from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-ducks";

import visibilityFilterDuck, {
  VISIBILITY_FILTERS
} from "../ducks/visibilityFilter";

export default function VisibilityFilters() {
  const activeFilter = useSelector(visibilityFilterDuck.selectors.$);
  const setFilter = useDispatch(visibilityFilterDuck.actions.setFilter);

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => setFilter(currentFilter)}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
}
