import React from "react";

import { Container } from "reactstrap";

import Task from "./Task";
import TaskEditor from "./TaskEditor";

const TodoList = ({ tasks, updateTask, removeTask, toggleEditor }) => (
  <Container>
    {tasks.map(task => {
      if (task.isInEditMode)
        return (
          <TaskEditor
            key={task.id}
            {...task}
            onSaveClick={updateTask}
            onAbortEditingClick={() => toggleEditor(task.id)}
          />
        );
      else
        return (
          <Task
            key={task.id}
            {...task}
            onRemoveClick={() => removeTask(task.id)}
            onToggleEditorClick={() => toggleEditor(task.id)}
          />
        );
    })}
  </Container>
);

export default TodoList;
