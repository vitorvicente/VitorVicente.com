import React from "react";
import {Col, Row} from "react-bootstrap";
import SideNavBar from "../AboutSideNav";

import {AboutContainer, Quotation} from "../../config/styles";

const About = ({lang}) => (
  <AboutContainer>
    <Row>
      <SideNavBar />
      <Col>
        <h3>{lang["aboutSectionTitle"]}</h3>
        {lang["aboutSectionContent"].map((item, idx) => (<p key={idx}>{item}</p>))}

        <h3>{lang["missionSectionTitle"]}</h3>
        {lang["missionSectionContent"].map((item, idx) => (<p key={idx}>{item}</p>))}

        <hr/>

        <Quotation>
          <p>{lang["quoteText"]}</p>
          <footer>{lang["quoteAuthor"]}</footer>
        </Quotation>

        <hr/>

        <h3>{lang["factSectionTitle"]}</h3>
        <Row>

          {
            lang["factSectionContent"].map((item, idx) => (
              <Col key={idx}>
                <ul>
                  {item.map((item, idx) => (<li key={idx}>{item}</li>))}
                </ul>
              </Col>
            ))
          }
        </Row>

      </Col>
    </Row>
  </AboutContainer>
);

export default About;