import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link={"/"} exact>
        About
      </NavigationItem>
      <NavigationItem link={"/skills"}>Skills</NavigationItem>
      <NavigationItem link={"/contact"}>Contact</NavigationItem>
      <a
        className={classes.navItemClone}
        href={
          "https://www.dropbox.com/s/cwerzwpytyxm9sw/Resume%20WebDev%202021.pdf?dl=0"
        }
      >
        Resume
      </a>
    </ul>
  );
};

export default NavigationItems;
