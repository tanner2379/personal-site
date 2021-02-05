import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems} >
    <NavigationItem link={'/'} exact >
      Home
    </NavigationItem>
    <NavigationItem link={'/resume'} >
      Resume
    </NavigationItem>
    <NavigationItem link={'/sites'} >
      Sites I've Built
    </NavigationItem>
  </ul>
  );
};

export default NavigationItems;