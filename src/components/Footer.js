import React from "react";
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Translations from "../config/Translation";

import {StyledCopyrightDiv, StyledFooterIcon, StyledSocialDiv} from "../config/styles";

const Footer = () => {
  const translations = Translations[localStorage.getItem("lang").toUpperCase()].Footer
  return (
    <>
      <StyledSocialDiv>
        <h1> {translations.socialHub} </h1>
        <a href={"http://in.vtr.pt"}>
          <StyledFooterIcon icon={faLinkedin}/>
        </a>
        <a href={"http://git.vtr.pt"}>
          <StyledFooterIcon icon={faGithub}/>
        </a>
        <a href={"http://fbp.vtr.pt"}>
          <StyledFooterIcon icon={faFacebook}/>
        </a>
        <a href={"http://insta.vtr.pt"}>
          <StyledFooterIcon icon={faInstagram}/>
        </a>
      </StyledSocialDiv>
      <StyledCopyrightDiv>
        <small>{translations.copyright} &copy; Vitor Vicente {new Date().getFullYear()}</small>
      </StyledCopyrightDiv>
    </>
  );
};


export default Footer