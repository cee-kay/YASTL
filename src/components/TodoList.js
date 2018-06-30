import React from "react";
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Row
} from "reactstrap";

import Task from "./Task";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    const initialEntries = [
      {
        id: 0,
        description: "Add new todos"
      },
      {
        id: 1,
        description: "Or Even More"
      }
    ];

    this.state = {
      todoListItems: initialEntries,
      newTaskDescription: "",
      nextIndex: initialEntries.length
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  handleAddTaskInputChanged(event) {
    this.setState({
      ...this.state,
      newTaskDescription: event.target.value
    });
  }

  addItem() {
    const item = {
      id: this.state.nextIndex,
      description: this.state.newTaskDescription
    };

    this.setState({
      ...this.state,
      nextIndex: this.state.nextIndex + 1,
      todoListItems: [...this.state.todoListItems, item],
      newTaskDescription: ""
    });
  }

  removeItem(itemToRemove) {
    const updatededList = this.state.todoListItems.filter(
      item => item.id !== itemToRemove.id
    );

    this.setState({
      ...this.state,
      todoListItems: updatededList
    });
  }

  updateItem(updatedItem) {
    this.setState({
      ...this.state,
      todoListItems: this.state.todoListItems.map(item => {
        if (updatedItem.id === item.id) {
          item.description = updatedItem.description;
        }
        return item;
      })
    });
  }

  render() {
    return (
      <Row>
        <Container>
          {this.state.todoListItems.map(task => {
            return (
              <Task
                key={task.id}
                taskData={task}
                removeItem={this.removeItem}
                updateItem={this.updateItem}
              />
            );
          })}
        </Container>
        <InputGroup>
          <Input
            placeholder="Add something you really need to be done"
            value={this.state.newTaskDescription}
            onChange={this.handleAddTaskInputChanged.bind(this)}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={this.addItem}>
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Row>
    );
  }
}

export default TodoList;
