import React, { useState } from 'react';

import classes from './Footer.module.css';
import githubLogo from '../../assets/githubLogo.png';
import linkedInLogo from '../../assets/linkedInLogo.png'


const Footer = props => {
  const [showEmail, setShowEmail] = useState(false);
  
  let email = null;
  

  if(showEmail) {
    // document.addEventListener('mouseDown', setShowEmail(false), false);
    email = (
      <div className={classes.email}>
        tanner2379@live.com
      </div>
    )
  }

  const toggleEmail = () => {
    // if(email && showEmail) {
    //   document.removeEventListener('mouseDown', setShowEmail(false), false);
    // }

    setShowEmail(!showEmail);
  }

  return(
    <div className={classes.Footer} >
      {email}
      <div className={classes.emailIcon} onClick={toggleEmail}>
        <div className={classes.emailText} >
          @
        </div>
      </div>
      <a href='https://github.com/tanner2379' className={classes.Icon} >
        <img src={githubLogo} alt='Github' />
      </a>
      <a href='https://www.linkedin.com/in/tanner-sigel/' className={classes.Icon} >
        <img src={linkedInLogo} alt='LinkedIn'/>
      </a>
    </div>
  );
}

export default Footer;