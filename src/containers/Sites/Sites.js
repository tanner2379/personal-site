import React, { useState } from 'react';

import Textbox from '../../components/Textbox/Textbox';
import Aux from '../../hoc/Aux/Aux';

import classes from './Sites.module.css';
import collaberScreenshot from '../../assets/collaberScreenshot.png';
import burgerBuilderScreenshot from '../../assets/burgerBuilderScreenshot.png';
import tannerchatScreenshot from '../../assets/tannerchatScreenshot.png';


const imageSwitch = siteName => {
  switch (siteName) {
    case 'collaber':
      return <img src={collaberScreenshot} alt='collaberScreenshot' className={classes.Image} />;
    case 'burgerBuilder':
      return <img src={burgerBuilderScreenshot} alt='burgerBuilderScreenshot' className={classes.Image} />;
    case 'tannerchat':
      return <img src={tannerchatScreenshot} alt='tannerchatScreenshot' className={classes.Image} />;
    default:
      return <img src={collaberScreenshot} alt='collaberScreenshot' className={classes.Image} />;
  }
}

const Sites = props => {
  const [currentImage, setCurrentImage] = useState(<img src={collaberScreenshot} alt='collaberScreenshot' className={classes.Image} />);

  const toggleImage = (siteName) => {
    setCurrentImage(imageSwitch(siteName));
  }

  return (
    <Aux className={classes.Sites}>
      <h1 className={classes.Title}>A Couple Sites I Have Made</h1>
      <div className={classes.textboxes} >
        <Textbox onClick={() => toggleImage('collaber')}>
          <div className={classes.textboxWrapper} onClick={() => toggleImage('collaber')} >
            {/* <a href='http://www.collaber.net' className={classes.removeLink}> */}
            <div className={classes.siteName}>
              Collaber.net:
            </div>
            <div className={classes.siteDescription}>
              Create teams, assign tasks, raise money, and interact with your supporters, all in one place. Signup will not work as I have not set up email confirmation.
              This is intentional since I am not quite ready for beta. Take a look at my developer post in the footer for a feel for how the site works, or send me an
              email and I can give you a temporary username/password.
              <p className={classes.Alpha}>(Closed Alpha)</p>
            </div>
          </div>
        </Textbox>
        <Textbox onClick={() => toggleImage('burgerBuilder')}>
          {/* <a href='https://burger-builder-48907.web.app' className={classes.removeLink}> */}
          <div className={classes.textboxWrapper} onClick={() => toggleImage('burgerBuilder')} >
            <div className={classes.siteName}>
              Burger Builder:
            </div>
            <div className={classes.siteDescription}>
              Build and order a delicious burger!
            </div>
          </div>
        </Textbox>
        <Textbox>
          {/* <a href='https://tannerchat.herokuapp.com/login' className={classes.removeLink}> */}
          <div className={classes.textboxWrapper} onClick={() => toggleImage('tannerchat')} >
            <div className={classes.siteName} >
              TannerChat:
            </div>
            <div className={classes.siteDescription}>
              A fun little chat app using Rails ActionCable.
            </div>
          </div>
        </Textbox>
      </div>
      {currentImage}
    </Aux>
  )
}

export default Sites;

