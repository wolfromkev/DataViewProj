import React from "react";
import classes from "./LoaderComponent.module.scss";

const LoaderComponent = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
