import React from 'react';

import { useStore } from './hooks-store/store';

import Layout from './hoc/Layouts/Layout';
import About from './containers/About/About';
import Resume from './containers/Resume/Resume';
import Sites from './containers/Sites/Sites';

const renderComponent = pageName => {
  switch(pageName) {
    case 'About':
      return (<About />);
    case 'Resume':
      return (<Resume />);
    case 'Sites':
      return (<Sites />);
    default:
      return (<About />);
  }
}

const App = props => {
  const state = useStore()[0];

  return (
    <Layout>
      {renderComponent(state.page)}
    </Layout>
  )
};

export default App;