import React from "react";
import { Button, ButtonGroup, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Task = ({ id, description, onRemoveClick, onToggleEditorClick }) => (
  <Row style={{ marginTop: "8px", marginBottom: "8px" }}>
    <Col xs="6">
      #{id} {description}
    </Col>
    <Col xs="6" className="text-right">
      <ButtonGroup>
        <Button outline size="sm" color="info" onClick={onToggleEditorClick}>
          <FontAwesomeIcon size="sm" icon={faPencilAlt} />
        </Button>
        <Button outline size="sm" color="danger" onClick={onRemoveClick}>
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
);

export default Task;
