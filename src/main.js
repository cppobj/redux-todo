import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from "./todoApp/app";

import store from "./todoApp/store"
import { addTodo, toggleTodo } from "./todoApp/action/todos";
import { setVisibilityFilter } from "./todoApp/action/visibilityFilter";
import * as VisibilityFilter from "./todoApp/enum/visibilityFilter";

injectTapEventPlugin();

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(addTodo("new todo"));
store.dispatch(addTodo("test"));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(2));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_COMPLETED));
store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_ACTIVE));
store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_ALL));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("app")
);
