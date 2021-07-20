import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Document from "../pages/Document";
import Client from "../pages/Client";
import Request from "../pages/Request";
import ContactNew from "../pages/ContactNew";
import DocumentNew from "../pages/DocumentNew";
import ClientNew from "../pages/ClientNew";
import ClientDetail from "../pages/ClientDetail";
import RequestNew from "../pages/RequestNew";
import DocumentArchived from "../pages/DocumentArchived";
import ContactEdit from "../pages/ContactEdit";
import RequestEdit from "../pages/RequestEdit";
import ClientEdit from "../pages/ClientEdit";
import NotFound from "../pages/NotFound";

const Router = () => {
  const [session, setSession] = useState(null);

  useState(() => {
    const sessionValue = localStorage.getItem("email");
    if (sessionValue) {
      setSession(sessionValue);
    }
  }, [localStorage]);

  return (
    <BrowserRouter>
      <Switch>
        {session && (
          <Layout>
            <Route exact path="/" component={Contact} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/document" component={Document} />
            <Route exact path="/request" component={Request} />
            <Route exact path="/contact/new" component={ContactNew} />
            <Route exact path="/client/new" component={ClientNew} />
            <Route exact path="/client/:id" component={ClientDetail} />
            <Route exact path="/client/:id/edit" component={ClientEdit} />
            <Route exact path="/document/new" component={DocumentNew} />
            <Route exact path="/request/new" component={RequestNew} />
            <Route
              exact
              path="/document/archived"
              component={DocumentArchived}
            />
            <Route exact path="/contact/:id/edit" component={ContactEdit} />
            <Route exact path="/request/:id/edit" component={RequestEdit} />
          </Layout>
        )}
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
