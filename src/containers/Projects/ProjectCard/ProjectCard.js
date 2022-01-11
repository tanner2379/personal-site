import classes from "./ProjectCard.module.css";

export const ProjectCard = (props) => {
  return (
    <div className={classes.ProjectCard}>
      <img className={classes.CardImage} src={props.image} alt={props.title} />
      <div className={classes.CardInfo}>
        <a className={classes.CardTitle} href={props.redirect}>
          {props.title}
        </a>
        <p className={classes.CardContent}>{props.children}</p>
      </div>
    </div>
  );
};
