import React, { useRef } from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";

import Aux from "../../hoc/Aux/Aux";
import ContactButton from "../../components/ContactButton/ContactButton";

import classes from "./Projects.module.css";
import polishedGuitar from "../../assets/polished-guitar-min.jpg";
import collaberLogo from "../../assets/Collaber.png";
import shrmLogo from "../../assets/SHRM.png";
import bpWelcome from "../../assets/BarnProsWelcome.png";

export const Projects = () => {
  const ref = useRef(null);

  return (
    <Aux>
      <div className={classes.Textbox} ref={ref}>
        <p className={classes.Title}>Examples of my Work</p>
        <ProjectCard
          title="BarnPros Office Suite"
          redirect="https://welcome.barnpros.app/welcome"
          image={bpWelcome}
        >
          One of numerous productivity apps, (limited to only BarnPros staff),
          using React/NestJS
        </ProjectCard>
        <ProjectCard
          title="Soaring High Renewal Ministries"
          redirect="https://www.highsoaringministries.com/"
          image={shrmLogo}
        >
          A blog site using React/Rails
        </ProjectCard>
        <ProjectCard
          title="Collaber.net"
          redirect="https://www.collaber.net/projects/1"
          image={collaberLogo}
        >
          A crowdsourcing site using Ruby on Rails
        </ProjectCard>

        <div className={classes.contactButtonWrapper}>
          <ContactButton />
        </div>
      </div>
      <img src={polishedGuitar} alt="" className={classes.SkillsImage} />
    </Aux>
  );
};
