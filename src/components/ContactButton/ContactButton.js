import React from 'react';
import { Link } from 'react-router-dom'

import classes from './ContactButton.module.css';


const ContactButton = props => {
  return (
    <Link
      to={'/contact'}
      className={classes.ContactButton}>
        Contact Now
    </Link>
  )
}


export default ContactButton;