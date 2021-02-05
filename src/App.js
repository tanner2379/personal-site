import React, { Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './hoc/Layouts/Layout';
import Home from './containers/Home/Home';


const Resume = React.lazy(() => {
  return import('./containers/Resume/Resume');
});

const Sites = React.lazy(() => {
  return import('./containers/Sites/Sites');
});

const App = props => {
  const routes = (
    <Switch>
      <Route path={'/resume'} component={(props) => <Resume {...props} />} />
      <Route path={'/sites'} component={(props) => <Sites {...props} />} />
      <Route path={'/'} exact component={Home} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>} >
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(App);