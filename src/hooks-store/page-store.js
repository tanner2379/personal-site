import { initStore } from './store';

const configureStore = () => {
  const actions = {
    SET_PAGE: (curPage, pageName) => {
      return { page: pageName };
    }
  };

  initStore(actions, {
    page: 'About'
  });
};

export default configureStore;