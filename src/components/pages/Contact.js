import React from "react";
import {Col, Row} from "react-bootstrap";
import SideNavBar from "../AboutSideNav";
import {AboutContainer} from "../../config/styles";


const Contact = ({lang}) => (<AboutContainer>
    <Row>
      <SideNavBar/>
      <Col>
        <h2 style={{"text-align": "center", "padding-bottom": "1.5rem"}}>{lang["contactTitle"]}</h2>
        <p style={{"text-align": "center", "max-width": "50%", "margin": "0 auto", "padding-bottom": "3rem"}}>
          {lang["contactText"]}
        </p>

        <Row>
          <Col>
            <h5>{lang["emailsTitle"]}</h5>
            <p>{lang["personal"]} - vitormouravicente@hotmail.com</p>
            <p>{lang["school"]} - vitor@bu.edu</p>
            <p>{lang["professional"]} - grandmen123@hotmail.com</p>
          </Col>
          <Col>
            <h5>{lang["othersTitle"]}</h5>
            <p>Discord - grandmen123#8952</p>
            <p>Twitter - @Grandmen123</p>
            <p>Facebook - Vítor Vicente</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </AboutContainer>);

export default Contact;