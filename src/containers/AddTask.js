import React from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, Button } from "reactstrap";
import { addTask } from "../actions";

const AddTask = ({ dispatch }) => {
  let input;
  //Unfortunatly we cannot use reactstrap 'input' see https://github.com/reactstrap/reactstrap/issues/172
  return (
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
  );
};

export default connect()(AddTask);
