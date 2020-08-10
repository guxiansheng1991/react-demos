import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class LayoutExample extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>1 of 1 Container</Col>
          </Row>
        </Container>

        <Container fluid="xs">
          <Row>
            <Col>1 of 1 Container</Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={10}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LayoutExample;