import React from "react";
import { connect } from "react-redux";
import TextField from 'material-ui/TextField';

import { addTodo } from "../action/todos"

const AddTodo = ({ dispatch }) => {
  let textField = null;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const text = textField.input.value;

    if (!text) {
      return;
    }

    dispatch(addTodo(text));

    textField.input.value = "";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField hintText="Type to do here" fullWidth={true} ref={(element) => {textField = element}} />
    </form>
  );
};

export default connect()(AddTodo);
