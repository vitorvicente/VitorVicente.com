import React from "react";
import {Col, Row} from "react-bootstrap";
import SideNavBar from "../AboutSideNav";
import Resumes from "../../config/Resumes";

import {AboutContainer} from "../../config/styles";


const Resume = ({lang}) => (<AboutContainer>
    <Row>
      <SideNavBar/>
      <Col>
        <h3>{lang["resumeTitle"]}</h3>
        <embed
          src={Resumes[localStorage.getItem("lang").toUpperCase()]}
          width="100%"
          height="1000"
          type="application/pdf"
          style={{marginBottom: "2%"}}
        />
      </Col>
    </Row>
  </AboutContainer>);

export default Resume;