import { initStore } from './store';

const configureStore = () => {
  const actions = {
    SET_PAGE: (curPage, pageName) => {
      return { page: pageName };
    }
  };

  let page = 'About';
  if(window.location.pathname === '/skills') {
    page = 'Skills';
  } else if(window.location.pathname === '/contact') {
    page = 'Contact';
  }

  initStore(actions, {
    page: page
  });
};

export default configureStore;