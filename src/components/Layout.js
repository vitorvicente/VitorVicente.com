import React from "react";

import { Layout } from "vtr-react-components";

import ErrorComponent from "./Error";

const WebsiteLayout = ({ children }) => (
  <Layout errorComponent={ErrorComponent}>
    {children}
  </Layout>
);

export default WebsiteLayout;