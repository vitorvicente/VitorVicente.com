import React, {useEffect} from "react"
import {navigate} from "gatsby";
import LanguageCodes from "../config/LanguageCodes";
import RoutingHelper from "../components/RoutingHelper";

const IndexPage = () => {
  useEffect(() => {
    let storedLanguage = window.localStorage.getItem("lang");

    if (!storedLanguage) {
      window.localStorage.setItem("lang", "en");
      storedLanguage = "en";
    }

    navigate(`/${storedLanguage}/`);
  });

  return (<RoutingHelper lang={LanguageCodes.English} />);
};

export default IndexPage;
