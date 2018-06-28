import React from "react";
import { Button, ButtonGroup, Input, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.message,
      isInEditMode: false
    };

    this.onInputValueChanged = this.onInputValueChanged.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  onInputValueChanged(event) {
    console.log();
    this.setState({
      ...this.state,
      description: event.target.value
    });
  }

  toggleEditMode() {
    const isInEditMode = !this.state.isInEditMode;

    this.setState({
      ...this.state,
      isInEditMode: isInEditMode
    });

    if (!isInEditMode) {
      this.props.editItem(this.props.index, this.state.description);
    }
  }

  render() {
    return (
      <Container>
        <Row style={{ marginTop: "8px", marginBottom: "8px" }}>
          <Col>
            {this.state.isInEditMode ? (
              <Input
                className="float-left"
                placeholder="Add something you really need to be done"
                value={this.state.description}
                onChange={this.onInputValueChanged}
              />
            ) : (
              <div className="float-left">{this.state.description}</div>
            )}
          </Col>
          <Col>
            <ButtonGroup className="float-right">
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
                  this.props.removeItem(this.props.index);
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} size="1x" />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ListEntry;
