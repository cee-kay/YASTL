import React from "react";
import { Container, Button, Row, Col, InputGroup, Input, InputGroupAddon } from "reactstrap";

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
      itemToAdd: '',
    };


    this.handleAddButtonClicked = this.handleClick.bind(this);
  }
  
  handleClick(){
        this.setState({
            ...this.state,
            todoList: [...this.state.todoList, {description: this.state.itemToAdd}],
            itemToAdd: ''
        })
  }

  handleChange(event){
      this.setState({
          ...this.state,
          itemToAdd: event.target.value
      });
      
  }

  render() {
    return (
      <Container>
        <h1>Yet Another TodoList</h1>
        <Row className="justify-content-center">
          <Col>
            <div>
              {this.state.todoList.map((entry, index) => {
                return <ListEntry key={index} message={entry.description} />;
              })}
            </div>
            <InputGroup>
              <Input placeholder="Add something you really need to be done" value={this.state.itemToAdd} onChange={this.handleChange.bind(this)}/>
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={this.handleAddButtonClicked}>Add</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
