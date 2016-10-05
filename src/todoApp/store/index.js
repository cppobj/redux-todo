import { createStore } from "redux";

import { SHOW_ALL } from "../enum/visibilityFilter";
import rootReducer from "../reducer";

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: []
};

export default createStore(rootReducer, initialState);
