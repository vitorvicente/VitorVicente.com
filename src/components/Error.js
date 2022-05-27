import React from "react";
import {StyledContainer} from "../config/styles";
import {Row, Col} from "react-bootstrap";

const Error = ({ error }) => (
  <StyledContainer>
    <Row>
      <Col>
        <h1> Error Occurred </h1>
        <p> {error.toString()} </p>
      </Col>
    </Row>
  </StyledContainer>
);

export default Error;