import React from "react";
import {Col} from "react-bootstrap";

import ProjectsImg from "../../assets/projects.jpg"
import BlogImg from "../../assets/blog.jpg"
import {navigate} from "gatsby";
import {PaddedRow, StyledImage, StyledButton, StyledContainer} from "../../config/styles"

const Landing = ({lang}) => (<StyledContainer>
  <PaddedRow>
    <Col>
      <h3> {lang["mainTitle"]} </h3>
      <p style={{"maxWidth": "75%"}}> {lang["mainText"]} </p>
      <StyledButton onClick={() => navigate("/" + localStorage.getItem("lang").toLowerCase() + "/about")}>
        {lang["btnText"]}
      </StyledButton>
    </Col>
  </PaddedRow>
  <PaddedRow>
    <Col xs={6}
         md={4}>
      <StyledImage src={ProjectsImg}/>
    </Col>
    <Col xs={12}
         md={8}>
      <h5> {lang["projectsTitle"]} </h5>
      <p> {lang["projectsText"]} </p>
      <StyledButton onClick={() => navigate("/" + localStorage.getItem("lang").toLowerCase() + "/projects")}>
        {lang["btnText"]}
      </StyledButton>
    </Col>
  </PaddedRow>
  <PaddedRow>
    <Col xs={12}
         md={8}>
      <h5> {lang["blogTitle"]}  </h5>
      <p> {lang["blogText"]} </p>
      <StyledButton onClick={() => navigate("/" + localStorage.getItem("lang").toLowerCase() + "/blog")}>
        {lang["btnText"]}
      </StyledButton>
    </Col>
    <Col xs={6}
         md={4}>
      <StyledImage src={BlogImg}/>
    </Col>
  </PaddedRow>
</StyledContainer>
);

export default Landing;