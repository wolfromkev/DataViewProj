import React from "react";
import classes from "./LandingPageTitle.module.scss";

function LandingPageTitle() {
  return (
    <div className={classes.wrapper}>
      <span className={classes.txt}>dataview</span>
      <span className={classes.gradient}></span>
    </div>
  );
}

export default LandingPageTitle;
