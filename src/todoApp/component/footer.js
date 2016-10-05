import React from "react";

import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from "../enum/visibilityFilter";
import FilterLink from "./filterLink";

const Footer = () => {
  return (
    <div>
      <FilterLink filter={SHOW_ALL}>Show All</FilterLink>
      <FilterLink filter={SHOW_ACTIVE}>Show Active</FilterLink>
      <FilterLink filter={SHOW_COMPLETED}>Show Completed</FilterLink>
    </div>
  );
};

export default Footer;
