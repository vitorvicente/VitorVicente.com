import React from "react";
import {Col} from "react-bootstrap";
import {navigate} from "gatsby";

import {PaddedRow, StyledButton, StyledContainer} from "../../config/styles";

const Blog = ({lang}) => (<StyledContainer>
    <PaddedRow>
      <Col>
        <h3> Coming Soon... </h3>
        <p> The blog is currently under construction, come back soon!! </p>
        <StyledButton onClick={() => navigate("/" + localStorage.getItem("lang").toLowerCase() + "/")}>
          Go Back
        </StyledButton>
      </Col>
    </PaddedRow>
  </StyledContainer>
);

export default Blog;