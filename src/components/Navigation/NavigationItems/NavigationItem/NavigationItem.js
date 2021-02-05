import React from 'react';

import { useStore } from '../../../../hooks-store/store';

import classes from './NavigationItem.module.css';

const NavigationItem = props => {
  const [curPage, dispatch] = useStore(false);

  const routePage = () => {
    dispatch('SET_PAGE', props.link);
  }

  let updatedClasses = [classes.NavigationItem];

  if(curPage.page === props.link){
    updatedClasses.push(classes.active);
  }


  return (
    <li className={updatedClasses.join(' ')} onClick={routePage}>
      {props.children}
    </li>
  );
};

export default NavigationItem;