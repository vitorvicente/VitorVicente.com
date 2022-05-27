import React from "react";
import {StyledContainer} from "../../config/styles";
import {Row, Col} from "react-bootstrap";

const NotFound = ({lang}) => (
  <StyledContainer>
    <Row>
      <Col>
        <h1> {lang.title} </h1>
        <p> {lang.text} </p>
      </Col>
    </Row>
  </StyledContainer>
);

export default NotFound;