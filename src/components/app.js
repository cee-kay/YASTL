import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon
} from "reactstrap";

import ListEntry from "./listEntry";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { description: "Entry 1" },
        { description: "Entry 2" },
        { description: "Entry 3" },
        { description: "Entry 4" },
        { description: "Entry 5" }
      ],
      itemToAdd: ""
    };

    this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
    this.editItemAtIndex = this.editItemAtIndex.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  editItemAtIndex(itemIndex, newVal) {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map((item, curIdx) => {
        if (itemIndex === curIdx) {
          item.description = newVal;
        }
        return item;
      })
    });
  }

  removeItem(index) {
    //TODO Optimize, so that react doesn't re-render the whole list
    this.state.todoList.splice(index, 1);
    this.setState({
      ...this.state,
      todoList: this.state.todoList
    });
  }

  handleAddButtonClicked() {
    if (!this.state.itemToAdd) return;

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, { description: this.state.itemToAdd }],
      itemToAdd: ""
    });
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      itemToAdd: event.target.value
    });
  }

  render() {
    return (
      <Container>
        <h1>
          <img alt="" src="icon.png" />Yet Another TodoList
        </h1>
        <Row className="justify-content-center">
          <Col>
            <div>
              {this.state.todoList.map((entry, index) => {
                return (
                  <ListEntry
                    key={index}
                    index={index}
                    message={entry.description}
                    removeItem={this.removeItem}
                    editItem={this.editItemAtIndex}
                  />
                );
              })}
            </div>
            <InputGroup>
              <Input
                placeholder="Add something you really need to be done"
                value={this.state.itemToAdd}
                onChange={this.handleChange.bind(this)}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={this.handleAddButtonClicked}>
                  Add
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
