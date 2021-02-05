import { initStore } from './store';

const configureStore = () => {
  const actions = {
    SET_PAGE: (curPage, pageName) => {
      return { page: pageName };
    }
  };

  let page = 'About';
  if(window.location.pathname === '/resume') {
    page = 'Resume';
  } else if(window.location.pathname === '/sites') {
    page = 'Sites';
  }

  initStore(actions, {
    page: page
  });
};

export default configureStore;