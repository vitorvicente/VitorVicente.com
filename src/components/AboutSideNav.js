import {Nav} from "react-bootstrap";
import {Link} from "gatsby";
import React from "react";
import Translations from "../config/Translation";

import {StyledSideNav} from "../config/styles";


const SideNavBar = () => {
  const lang = Translations[localStorage.getItem("lang").toUpperCase()].Navbar
  return (
    <StyledSideNav xs={6} md={2}>
      <h5>About</h5>
      <Nav className="flex-column">
        <Link to={"/" + localStorage.getItem("lang").toLowerCase() + "/about"}>{lang["aboutMe"].toUpperCase()}</Link>
        <Link to={"/" + localStorage.getItem("lang").toLowerCase() + "/resume"}>{lang["resume"].toUpperCase()}</Link>
        <Link to={"/" + localStorage.getItem("lang").toLowerCase() + "/contact"}>{lang["contact"].toUpperCase()}</Link>
      </Nav>
    </StyledSideNav>
  );
};

export default SideNavBar;