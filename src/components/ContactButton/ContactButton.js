import React from 'react';

import { useStore } from '../../hooks-store/store';

import classes from './ContactButton.module.css';


const ContactButton = props => {
  const dispatch = useStore(false)[1];

  const contactPage = () => {
    dispatch('SET_PAGE', 'Contact');
  }

  return (
    <div onClick={contactPage} className={classes.ContactButton}>
      Contact Now
    </div>
  )
}


export default ContactButton;