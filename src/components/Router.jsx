import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
