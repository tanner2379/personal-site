import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems} >
      <NavigationItem link={'About'} >
        About
      </NavigationItem>
      <NavigationItem link={'Resume'} >
        Resume
      </NavigationItem>
      <NavigationItem link={'Sites'} >
        Sites I've Built
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;