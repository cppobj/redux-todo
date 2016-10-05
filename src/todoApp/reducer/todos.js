import { createReducer } from "utils/reducer";
import { ADD_TODO, TOGGLE_TODO } from "../enum/actions";

let nextTodoId = 1;

const initialSate = [];

export default createReducer({
  [ADD_TODO]: (state, { text }) => {
    return [
      ...state,
      {
        id: nextTodoId++,
        text,
        completed: false
      }
    ];
  },

  [TOGGLE_TODO]: (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });
  }
}, initialSate)
