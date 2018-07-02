import React from "react";
import { connect } from "react-redux";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { addTask } from "../actions";

const AddTask = ({ dispatch }) => {
  let input;
  //Unfortunatly we cannot use reactstrap 'input' see https://github.com/reactstrap/reactstrap/issues/172
  return (
    <Container style={{ marginTop: "8px" }}>
      <Row>
        <Col sm={{ size: "6", offset: 3 }}>
          <InputGroup>
            <input
              className="form-control"
              ref={node => (input = node)}
              placeholder="Add something you really need to be done"
            />
            <InputGroupAddon addonType="append">
              <Button
                color="primary"
                onClick={e => {
                  let text = input.value.trim();
                  if (text) {
                    dispatch(addTask(text));
                  }
                  input.value = "";
                }}
              >
                Add Task
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect()(AddTask);
