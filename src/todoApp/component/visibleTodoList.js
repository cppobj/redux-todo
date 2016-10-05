import { connect } from "react-redux";

import { toggleTodo } from "../action/todos";
import TodoList from "./todoList";
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from "../enum/visibilityFilter";

const getVisibleTodos = (todos = [], visibilityFilter) => {
  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter((todo) => {
        return !todo.completed;
      });
    case SHOW_COMPLETED:
      return todos.filter((todo) => {
        return todo.completed;
      });
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch(toggleTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
