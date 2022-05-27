import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";

import {navigate} from "gatsby";
import {useLocation} from "@reach/router";

import {
  setFirebaseClass,
  setLayoutBase,
  setWithAuthorizationWrapper,
  WithAuthorizationClass
} from "vtr-react-components";

import Firebase from "./src/components/API/Firebase";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

import {pathPrefix} from "./gatsby-config";
import {StyledContainer} from "./src/config/styles";
import {Row, Col} from "react-bootstrap";


const Wrapper = ({element}) => {
  setFirebaseClass(Firebase);

  const WithAuthorizationWrapper = (props) => {
    const location = useLocation();
    const savePathname = () =>
      window.localStorage.setItem(
        "pathname",
        location.pathname.replace(pathPrefix, "")
      );

    return (
      <WithAuthorizationClass
        firebaseAuthNext={(authUser) => {
          if (!authUser) {
            savePathname();
            navigate("/login");
          }
        }}
        firebaseAuthFallback={() => {
          savePathname();
          navigate("/login");
        }}
        authorizationFailed=
          {<StyledContainer>
            <Row>
              <Col>
                <h1> No Permissions </h1>
                <p> If you believe you should have access, please contact an admin. </p>
              </Col>
            </Row>
          </StyledContainer>}
        {...props}
      />
    );
  };
  // would've preferred to call this in gatsby-browser onClientEntry, but can't do Queries in there
  setWithAuthorizationWrapper(WithAuthorizationWrapper);

  const LayoutBase = ({children}) => (
    <Fragment>
      <Header/>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      {children}
      <Footer/>
    </Fragment>
  );
  LayoutBase.displayName = "LayoutBase";
  setLayoutBase(LayoutBase);

  return element;
};

export default Wrapper;