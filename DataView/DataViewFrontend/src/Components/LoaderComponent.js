import React from "react";
import classes from "./LoaderComponent.module.scss";
import PropTypes from "prop-types";

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

LoaderComponent.propTypes = {};

export default LoaderComponent;
