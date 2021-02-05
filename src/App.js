import React, { Suspense } from 'react';

import { useStore } from './hooks-store/store';

import Layout from './hoc/Layouts/Layout';
import About from './containers/About/About';
import Resume from './containers/Resume/Resume';
import Sites from './containers/Sites/Sites';

const wrapper = (element) => {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>} >
        {element}
      </Suspense>
    </Layout>
  );
};

const App = props => {
  const state = useStore()[0];

  switch(state.page) {
    case 'About':
      return wrapper(<About />);
    case 'Resume':
      return wrapper(<Resume />);
    case 'Sites':
      return wrapper(<Sites />);
    default:
      return wrapper(<About />);
  }
};

export default App;