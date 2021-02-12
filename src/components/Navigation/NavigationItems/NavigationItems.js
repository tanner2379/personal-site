import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems} >
      <NavigationItem link={'/'} exact>
        About
      </NavigationItem>
      <NavigationItem link={'/skills'} >
        Skills
      </NavigationItem>
      <NavigationItem link={'/contact'} >
        Contact
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;