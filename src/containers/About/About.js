import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import ContactButton from '../../components/ContactButton/ContactButton';

import classes from './About.module.css';
import boxBuilding from '../../assets/box-building-min.png';

const About = props => {

  return (
    <Aux>
      <div className={classes.Textbox}>
        <p className={classes.Title}>Craftsmanship takes many forms</p>
        <p className={classes.openingParagraph}>
          Whether it is hand sawn joinery or hand crafted websites, our passion drives us to create.<br/>
          Allow me to bring your website/web application dreams into reality.
        </p>
        <div className={classes.contactButtonWrapper}>
          <ContactButton />
        </div>
      </div>
      <img src={boxBuilding} alt='boxBuilding' className={classes.AboutImage} />
    </Aux>
  )
}

export default About;