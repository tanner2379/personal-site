import React, { Suspense } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Layout from "./hoc/Layouts/Layout";
import About from "./containers/About/About";
import { Projects } from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import TransitionElement from "./components/TransitionElement/TransitionElement";

const App = (props) => {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Route
          render={({ location }) => (
            <TransitionElement
              multiple
              assignedKey={location.key}
              animation="fade"
              timeout={1000}
            >
              <Switch location={location}>
                <Route path="/" exact component={About} />
                {/* <Route path="/skills" component={Skills} /> */}
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/" />
              </Switch>
            </TransitionElement>
          )}
        />
      </Suspense>
    </Layout>
  );
};

export default withRouter(App);
