import React from "react";
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton';

import { setVisibilityFilter } from "../action/visibilityFilter";

const FilterLink = ({ children, onClick, isActive }) => {
  return (
    <FlatButton label={children} primary={ isActive } onClick={ onClick } />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: state.visibilityFilter === ownProps.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
