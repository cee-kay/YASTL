import React from "react";
import { Button, ButtonGroup, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import TaskEditor from "./TaskEditor";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.taskData,
      isInEditMode: false
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateItemProxy = this.updateItemProxy.bind(this);
  }

  toggleEditMode() {
    this.setState({
      ...this.state,
      isInEditMode: !this.state.isInEditMode
    });
  }

  updateItemProxy(item) {
    this.props.updateItem(item);
    this.toggleEditMode();
  }

  render() {
    return (
      <div>
        {this.state.isInEditMode ? (
          <TaskEditor
            task={this.state.task}
            save={this.updateItemProxy}
            abort={this.toggleEditMode}
          />
        ) : (
          <Row style={{ marginTop: "8px", marginBottom: "8px" }}>
            <Col xs="6">#{this.state.task.id} {this.state.task.description}</Col>
            <Col xs="6" className="text-right">
              <ButtonGroup>
                <Button
                  outline
                  size="sm"
                  color="info"
                  onClick={this.toggleEditMode}
                >
                  <FontAwesomeIcon size="sm" icon={faPencilAlt} />
                </Button>
                <Button
                  outline
                  size="sm"
                  color="danger"
                  onClick={() => {
                    this.props.removeItem(this.state.task);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default Task;
