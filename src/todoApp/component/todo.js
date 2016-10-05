import React from "react";
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const renderCheckbox = (compelted) => {
  return <Checkbox checked={compelted}/>
};

const Todo = ({ text, completed, onTodoClick }) => {
  const style = {
    textDecoration: completed ? "line-through" : "none"
  };

  return (
    <ListItem primaryText={text} style={style} leftCheckbox={<Checkbox onCheck={onTodoClick} checked={completed}/>}/>
  );
};

export default Todo;
