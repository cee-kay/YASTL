import React from "react";
import { Container, Row, Col } from "reactstrap";

import TodoList from "../containers/TodoList";
import AddTask from "../containers/AddTask";

function App() {
  return (
    <Container>
      <Row>
        <Col sm={{ size: "6", offset: 3 }}>
          <h2>
            {/* https://www.iconfinder.com/icons/2620529/checklist_employee_job_seeker_unemployee_work_icon */}
            <img alt="" src="icon.png" />Yet Another Simple Todo List
          </h2>
        </Col>
      </Row>
      <TodoList />
      <AddTask />
    </Container>
  );
}

export default App;
