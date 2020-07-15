import React from "react";
import classes from "./UserInfo.module.scss";
import { connect } from "react-redux";

function UserInfo(props) {
  const { email, firstName, lastName } = props.userInfo;

  return (
    <div className={classes.userInfoCard}>
      {email}
      {firstName}
      {lastName}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userData.credentials,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
