import React from 'react';

import classes from './Textbox.module.css';

const Textbox = props => {
  return(
    <div className={classes.Textbox} >
      {props.children}
    </div>
  );
};

export default Textbox