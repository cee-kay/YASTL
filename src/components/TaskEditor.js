import React from "react";
import { Button, ButtonGroup, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const TaskEditor = ({ id, description, onAbortEditingClick, onSaveClick }) => {
  let input;

  return (
    <Row style={{ marginTop: "8px", marginBottom: "8px" }}>
      <Col xs="6">
        <input
          className="form-control"
          size="sm"
          placeholder="You need to add a description"
          defaultValue={description}
          ref={node => (input = node)}
        />
      </Col>
      <Col xs="6">
        <ButtonGroup>
          <Button
            outline
            size="sm"
            color="info"
            onClick={() => {
              let text = input.value.trim();
              if (text) {
                onSaveClick(id, input.value);
              } else {
                onAbortEditingClick();
              }
            }}
          >
            <FontAwesomeIcon size="sm" icon={faSave} />
          </Button>
          <Button
            outline
            size="sm"
            color="danger"
            onClick={onAbortEditingClick}
          >
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default TaskEditor;
