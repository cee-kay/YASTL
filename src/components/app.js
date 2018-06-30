import React from "react";
import { Container } from "reactstrap";

import TodoList from "./TodoList";

function App() {
  return (
    <Container>
      <h1>
        <img alt="" src="icon.png" />Yet Another TodoList
      </h1>
      <TodoList />
    </Container>
  );
}

export default App;
