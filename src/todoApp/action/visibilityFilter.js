import { SET_VISIBILITY_FILTER } from "../enum/actions";

export const setVisibilityFilter = (visibilityFilter) => ({
  type: SET_VISIBILITY_FILTER,
  visibilityFilter
});
