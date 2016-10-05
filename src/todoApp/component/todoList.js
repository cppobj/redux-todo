import React from "react";
import { List } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

import Todo from "./todo";

const TodoList = ({todos = [], onTodoClick}) => {
  return (
    <List>
      {
        todos.map((todo) => {
          return <Todo key={todo.id} {...todo} onTodoClick={() => {onTodoClick(todo.id)}} />
        })
      }
      <p>Some Teext</p>
    </List>
  );
};

export default TodoList;
