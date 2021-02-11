import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';

import Aux from '../../hoc/Aux/Aux';
import { updateObject, checkValidity } from '../../shared/utility';

import classes from './Contact.module.css';

const Contact = props => {
  init("user_lUyWLWlDU7IvSlalnyu22");
  const serviceID = 'service_j0vizk3'
  const templateID = 'template_r0r4aqj'

  const [formValue, setFormValue] = useState({
    name: {
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
    },
    email: {
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
    },
    company: {
      value: '',
      validation: {
        required: false
      },
      valid: false,
      touched: false,
    },
    subject: {
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      classes: [classes.subjectInput]
    },
    message: {
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
    },
  })

  const [formIsValid, setFormIsValid] = useState(false);

  const formSendHandler = () => {

    if (formIsValid) {
      emailjs.sendForm(serviceID, templateID, '#contactForm');
    }
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(formValue[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, formValue[inputIdentifier].validation),
      touched: true,
    });

    const updatedFormValue = updateObject(formValue, {
      [inputIdentifier]: updatedFormElement
    })

    let formValid = true;
    for (let inputIdentifier in updatedFormValue) {
      formValid = updatedFormValue[inputIdentifier].valid && formValid;
    }

    setFormValue(updatedFormValue);
    setFormIsValid(formValid);
  };

  const formElementsArray = [];

  for (let key in formValue) {
    formElementsArray.push({
      id: key,
      config: formValue[key]
    });
  }


  return (
    <Aux className={classes.Contact}>
      <h1 className={classes.Title}>Contact Me</h1>
      <div className={classes.formWrapper}>
        <form id="contactForm" className={classes.Form}>
          <input type="text" placeholder="Name" className={classes.nameInput} name="name" onChange={(event) => inputChangedHandler(event, 'name')} />
          <input type="email" placeholder="Email Address" className={classes.emailInput} name="email" onChange={(event) => inputChangedHandler(event, 'email')} />
          <input type="text" placeholder="Company" className={classes.companyInput} name="company" onChange={(event) => inputChangedHandler(event, 'company')} />
          <input type="text" placeholder="Subject" className={classes.subjectInput} name="subject" onChange={(event) => inputChangedHandler(event, 'subject')} />
          <textarea placeholder="Your Message" className={classes.textArea} name="message" onChange={(event) => inputChangedHandler(event, 'message')} />
          <div className={classes.submitButton} onClick={(event) => formSendHandler(event)} >
            Submit
          </div>
        </form>
      </div>
    </Aux>
  )
}

export default Contact;

