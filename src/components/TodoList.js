import React from "react";

import { Container, Row, Col, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Task from "./Task";
import TaskEditor from "./TaskEditor";

const TodoList = ({
  tasks,
  updateTask,
  removeTask,
  toggleEditor,
  clearAll
}) => (
  <Container>
    <Row style={{ marginTop: "8px", marginBottom: "8px" }}>
      <Col sm={{ size: "5", offset: 3 }}>
        <span>You have </span>
        <span className="text-primary" style={{ fontWeight: "bold" }}>
          {tasks.length}
        </span>
        <span> open task(s)</span>
      </Col>
      <Col>
        <Button outline color="warning" size="sm" onClick={clearAll}>
          Clear All
        </Button>
      </Col>
    </Row>
    <TransitionGroup className="task">
      {tasks.map(task => {
        if (task.isInEditMode)
          return (
            <CSSTransition
              component={null}
              key={task.id}
              timeout={500}
              classNames="task"
            >
              <TaskEditor
                key={task.id}
                {...task}
                onSaveClick={updateTask}
                onAbortEditingClick={() => toggleEditor(task.id)}
              />
            </CSSTransition>
          );
        else
          return (
            <CSSTransition
              component={null}
              key={task.id}
              timeout={500}
              classNames="task"
            >
              <Task
                key={task.id}
                {...task}
                onRemoveClick={() => removeTask(task.id)}
                onToggleEditorClick={() => toggleEditor(task.id)}
              />
            </CSSTransition>
          );
      })}
    </TransitionGroup>
  </Container>
);

export default TodoList;
