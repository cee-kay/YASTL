import React from "react";
import { Button, ButtonGroup, Input, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

class TaskEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    };

    this.onInputValueChanged = this.onInputValueChanged.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.abortEditing = this.abortEditing.bind(this);
  }

  onInputValueChanged(event) {
    this.setState({
      ...this.state,
      task: {
        description: event.target.value,
        id: this.state.task.id
      }
    });
  }

  abortEditing() {
    this.props.abort();
  }

  saveChanges() {
    this.props.save(this.state.task);
  }

  render() {
    return (
      <Row style={{ marginTop: "8px", marginBottom: "8px" }}>
        <Col xs="6">
          <Input
            size="sm"
            placeholder="Add something you really need to be done"
            value={this.state.task.description}
            onChange={this.onInputValueChanged}
          />
        </Col>
        <Col xs="6">
          <ButtonGroup>
            <Button outline size="sm" color="info" onClick={this.saveChanges}>
              <FontAwesomeIcon size="sm" icon={faSave} />
            </Button>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={(this.abortEditing)}
            >
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }
}

export default TaskEditor;
