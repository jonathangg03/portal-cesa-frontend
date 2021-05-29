import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Contact from "../pages/Contact";
import Document from "../pages/Document";
import Client from "../pages/Client";
import Request from "../pages/Request";
import ContactNew from "../pages/ContactNew";
import DocumentNew from "../pages/DocumentNew";
import ClientNew from "../pages/ClientNew";
import RequestNew from "../pages/RequestNew";
import DocumentArchived from "../pages/DocumentArchived";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Contact} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/document" component={Document} />
          <Route exact path="/request" component={Request} />
          <Route exact path="/contact/new" component={ContactNew} />
          <Route exact path="/client/new" component={ClientNew} />
          <Route exact path="/document/new" component={DocumentNew} />
          <Route exact path="/request/new" component={RequestNew} />
          <Route exact path="/document/archived" component={DocumentArchived} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
