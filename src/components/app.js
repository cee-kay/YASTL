import React from "react";
import { Container } from "reactstrap";

import TodoList from "../containers/TodoList";
import AddTask from "../containers/AddTask";

function App() {
  return (
    <Container>
      <h1>
        <img alt="" src="icon.png" />Yet Another TodoList
      </h1>
      <TodoList />
      <AddTask />
    </Container>
  );
}

export default App;
