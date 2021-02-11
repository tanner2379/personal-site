import React from 'react';

import { useStore } from './hooks-store/store';

import Layout from './hoc/Layouts/Layout';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Contact from './containers/Contact/Contact';

const renderComponent = pageName => {
  switch(pageName) {
    case 'About':
      return (<About />);
    case 'Skills':
      return (<Skills />);
    case 'Contact':
      return (<Contact />);
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