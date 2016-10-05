import React from "react";

import AddTodo from "./component/addTodo";
import VisibleTodoList from "./component/visibleTodoList";
import Footer from "./component/footer";

const App = () => {
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  );
};

export default App;