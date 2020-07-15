import React, { useState, Fragment, useEffect } from "react";
import classes from "./UserView.module.scss";
import { connect } from "react-redux";
import Calendar from "../Components/UserView/Calendar";
import ToDoList from "../Components/UserView/ToDoList";
import UserInfo from "../Components/UserView/UserInfo";

function UserView() {
  return (
    <Fragment>
      <div className={classes.gridContainer}>
        <div className={classes.calendarContainer}>
          <Calendar />
        </div>
        <div className={classes.userInfoContainer}>
          <UserInfo />
        </div>
      </div>
      <div className={classes.toDoContainer}>
        <ToDoList />
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  productData: state.productData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
