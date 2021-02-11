import React, { useState } from 'react';

import Aux from '../../hoc/Aux/Aux';
import ContactButton from '../../components/ContactButton/ContactButton';

import classes from './Skills.module.css';
import polishedGuitar from '../../assets/polished-guitar-min.jpg';


const Skills = props => {
  const [scale, setScale] = useState(null);

  const toggleScale = inputScale => {
    if (scale !== inputScale) {
      setScale(inputScale);
    } else {
      setScale(null);
    }
  }

  let smallButtonClasses = [classes.Button];
  let largeButtonClasses = [classes.Button];

  let skillList = null;

  if (scale === 'small') {
    smallButtonClasses.push(classes.active);
    largeButtonClasses = [classes.Button];

    skillList = (
      <div>
        <ul className={classes.bulletList}>
          <li className={classes.bulletPoint}>
            Minimal library usage gets users to your content faster
          </li>
          <li className={classes.bulletPoint}>
            Effortlessly navigable UI experience. Users will never struggle to find what they need
          </li>
          <li className={classes.bulletPoint}>
            Authentication and cookie setting for insights into customer behavior on your site
          </li>
          <li className={classes.bulletPoint}>
            Load what you need, when you need it for quick, responsive pages
          </li>
        </ul>
        <p>Example: This site! Doesn't it look nice?</p>
      </div>
    )
  } else if (scale === 'large') {
    smallButtonClasses = [classes.Button];
    largeButtonClasses.push(classes.active);

    skillList = (
      <div>
        <ul className={classes.bulletList}>
          <li className={classes.bulletPoint}>
            Multilevel authentication structures for developers and admins
          </li>
          <li className={classes.bulletPoint}>
            Live notifications for users, queued asynchrounously using ActionCable, Redis, and Rails jobs
          </li>
          <li className={classes.bulletPoint}>
            Payment sub-account implementation, fees for moving money between user accounts
          </li>
          <li className={classes.bulletPoint}>
            Load balancing and autoscaling through AWS
          </li>
        </ul>
        <p>
          Example: <a href='http://www.collaber.net/dev_posts/version_0point00' className={classes.link}>Collaber.net</a>
        </p>
      </div>
    )
  }

  return (
    <Aux>
      <div className={classes.Textbox}>
        <p className={classes.Title}>Full Stack Rails and React developer</p>
        <p className={classes.openingParagraph}>Always the right tools for the scale of your project.</p>
        <div onClick={() => toggleScale('large')} className={largeButtonClasses.join(' ')}>
          Large
        </div>
        <div onClick={() => toggleScale('small')} className={smallButtonClasses.join(' ')}>
          Small
        </div>
        {skillList}
        <div className={classes.contactButtonWrapper}>
          <ContactButton />
        </div>
      </div>
      <img src={polishedGuitar} alt='' className={classes.SkillsImage} />
    </Aux>
  )
}

export default Skills;