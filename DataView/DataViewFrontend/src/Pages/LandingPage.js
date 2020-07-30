import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser, signUpUser } from "../Redux/actions/userDataActions";
import LandingPageTitle from "../Components/LandingPage/LandingPageTitle";
import LoginForm from "../Components/LandingPage/LoginForm";
import SignupForm from "../Components/LandingPage/SignupForm";
import LoaderComponent from "../Components/LoaderComponent";

function LandingPage(props) {
  const [login, setLogin] = useState(false);

  const loginSwitcher = () => {
    setLogin(!login);
  };

  return (
    <>
      <LandingPageTitle />
      {props.loading ? (
        <LoaderComponent />
      ) : login ? (
        <LoginForm loginSwitcher={loginSwitcher} />
      ) : (
        <SignupForm loginSwitcher={loginSwitcher} />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  errors: state.userData.errors,
  loading: state.userData.loading,
});

const mapDispatchToProps = {
  signUpUser,
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
