import { createReducer } from "utils/reducer";

import { SHOW_ALL } from "../enum/visibilityFilter";
import { SET_VISIBILITY_FILTER } from "../enum/actions";

export default createReducer({
  [SET_VISIBILITY_FILTER]: (state, { visibilityFilter }) => {
    return visibilityFilter;
  }
}, SHOW_ALL);
