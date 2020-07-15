import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser, signUpUser } from "../Redux/actions/userDataActions";
import LandingPageTitle from "../Components/LandingPage/LandingPageTitle";
import LoginForm from "../Components/LandingPage/LoginForm";
import SignupForm from "../Components/LandingPage/SignupForm";

function LandingPage(props) {
  const [login, setLogin] = useState(false);

  const loginSwitcher = () => {
    setLogin(!login);
  };

  return (
    <>
      <LandingPageTitle />
      {login ? (
        <LoginForm loginSwitcher={loginSwitcher} />
      ) : (
        <SignupForm loginSwitcher={loginSwitcher} />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  errors: state.userData.errors,
});

const mapDispatchToProps = {
  signUpUser,
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
