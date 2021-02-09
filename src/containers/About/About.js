import React from 'react';

import Aux from '../../hoc/Aux/Aux';

import classes from './About.module.css';
import boxBuilding from '../../assets/box-building-min.png';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const About = props => {

  return (
    <Aux>
      {/* <Textbox>
        Hi, My name is Tanner and I develop sites using React and Rails. You will notice that if you navigate using the navbar above, the url will not change,
        however, if you manually route yourself to a certain page you will still get there. Interesting right?
        This is a pure React app and doesn't use react-router-dom or any libraries external to the base React library. This allows me to do fancy page transitions 
        where every element can be animated if I want it to be, all using normal css animations and without preloading any unneeded elements. The downside is if
        you refresh, you will go to whatever page you first routed to. I could fix this of course, but then where would my proof that I didn't use a library be?
        If you are interested in how I did this, the source code for this site is available <a href='https://github.com/tanner2379/personal-site'>here</a>.
      </Textbox> */}
      <div className={classes.Textbox}>
        <p className={classes.FancyTitle}>Craftsmanship takes many forms</p>
        <p className={classes.openingParagraph}>
          Whether it is hand sawn joinery or hand crafted websites, our passion drives us to create.<br/>
          Allow me to bring your website/web application dreams into reality.
        </p>
        <div className={classes.HireButton}>
          <a href=''>Contact Now</a>
        </div>
      </div>
      <img src={boxBuilding} alt='boxBuilding' className={classes.AboutImage} />
    </Aux>
  )
}

export default About;