import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
