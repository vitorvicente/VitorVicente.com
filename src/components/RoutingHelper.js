import React from "react";
import {withPrefix} from "gatsby";
import Languages from "../config/Translation";
import * as ROUTES from "../config/Routes"

import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

import {FullSizeRouter} from "../config/styles";

const RoutingHelper = ({lang}) => (
  <FullSizeRouter basepath={withPrefix(`${lang.toLowerCase()}`)}>
      <Blog lang={Languages[`${lang.toUpperCase()}`]["Blog"]} path={ROUTES.BLOG}/>
      <Projects lang={Languages[`${lang.toUpperCase()}`]["Projects"]} path={ROUTES.PROJECTS}/>
      <Contact lang={Languages[`${lang.toUpperCase()}`]["Contact"]} path={ROUTES.CONTACT}/>
      <Resume lang={Languages[`${lang.toUpperCase()}`]["Resume"]} path={ROUTES.RESUME}/>
      <About lang={Languages[`${lang.toUpperCase()}`]["About"]} path={ROUTES.ABOUT}/>
      <Landing lang={Languages[`${lang.toUpperCase()}`]["Home"]} path={ROUTES.LANDING}/>
      <NotFound lang={Languages[`${lang.toUpperCase()}`]["NotFound"]} default/>
  </FullSizeRouter>
);

export default RoutingHelper;