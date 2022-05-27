import React from "react";

import Translations from "../config/Translation";
import {Container, Nav, Navbar} from "react-bootstrap";
import {navigate} from "gatsby";
import LanguageCodes from "../config/LanguageCodes";

import {
  MastHead,
  SiteHeading,
  StyledCollapse,
  StyledLanguageDivider,
  StyledLanguageLink,
  StyledNav,
  StyledNavBrand,
  StyledNavLink,
  StyledNavToggle
} from "../config/styles";

import * as ROUTES from "../config/Routes"

const checkLanguage = (toCheck) => {
  return localStorage.getItem("lang").toLowerCase() === toCheck.toLowerCase();
}

const switchLanguage = (langCode) => {
  localStorage.setItem("lang", langCode.toLowerCase())
  navigate("/" + langCode + "/" + window.location.pathname.split("/")[2])
}

const LanguagePicker = () => (<StyledLanguageDivider>
  <StyledLanguageLink
    selected={checkLanguage(LanguageCodes.English)}
    onClick={() => switchLanguage(LanguageCodes.English)}>
    EN
  </StyledLanguageLink>
  /
  <StyledLanguageLink
    selected={checkLanguage(LanguageCodes.Spanish)}
    onClick={() => switchLanguage(LanguageCodes.Spanish)}>
    ES
  </StyledLanguageLink>
  /
  <StyledLanguageLink
    selected={checkLanguage(LanguageCodes.French)}
    onClick={() => switchLanguage(LanguageCodes.French)}>
    FR
  </StyledLanguageLink>
  /
  <StyledLanguageLink
    selected={checkLanguage(LanguageCodes.German)}
    onClick={() => switchLanguage(LanguageCodes.German)}>
    GE
  </StyledLanguageLink>
  /
  <StyledLanguageLink
    selected={checkLanguage(LanguageCodes.Portuguese)}
    onClick={() => switchLanguage(LanguageCodes.Portuguese)}>
    PT
  </StyledLanguageLink>
</StyledLanguageDivider>);

const NavBar = ({translation}) => (<StyledNav expand="lg">
  <Container>
    <Navbar.Brand>
      <StyledNavBrand to={"/" + localStorage.getItem("lang").toLowerCase() + `${ROUTES.LANDING}`}>
        VITOR VICENTE
      </StyledNavBrand>
    </Navbar.Brand>
    <StyledNavToggle aria-controls={"basic-navbar-nav"}>
    </StyledNavToggle>
    <StyledCollapse id={"basic-navbar-nav"}>
      <Nav className={"justify-content-end"}
           style={{width: "100%"}}>
        <Nav.Link>
          <StyledNavLink to={"/" +
                             localStorage.getItem("lang").toLowerCase() +
                             `${ROUTES.LANDING}`}>{translation.home.toUpperCase()}</StyledNavLink>
        </Nav.Link>
        <Nav.Link>
          <StyledNavLink to={"/" +
                             localStorage.getItem("lang").toLowerCase() +
                             `${ROUTES.ABOUT}`}>{translation.about.toUpperCase()}</StyledNavLink>
        </Nav.Link>
        <Nav.Link>
          <StyledNavLink to={"/" +
                             localStorage.getItem("lang").toLowerCase() +
                             `${ROUTES.PROJECTS}`}>{translation.projects.toUpperCase()}</StyledNavLink>
        </Nav.Link>
        <Nav.Link>
          <LanguagePicker/>
        </Nav.Link>
      </Nav>
    </StyledCollapse>
  </Container>
</StyledNav>);

const Header = () => {
  return (<MastHead>
    <NavBar translation={Translations[localStorage.getItem("lang").toUpperCase()].Navbar}/>
    <SiteHeading>
    </SiteHeading>
  </MastHead>);
}


export default Header;