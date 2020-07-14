import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import classes from "./LandingPage.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { signUpUser, loginUser } from "../../Redux/actions/userDataActions";

function SignupForm(props) {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },

    validationSchema: yup.object().shape({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().min(6).label("Password"),
      firstName: yup.string().required().label("First Name"),
      lastName: yup.string().required().label("Last Name"),
    }),

    onSubmit: (values) => {
      props.signUpUser(values);
    },
  });

  const demoButton = () => {
    const userData = { email: "kevin", password: "kevin" };
    props.loginUser(userData);
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.welcomeHeader}>Sign up</h2>
        {errors ? (
          <h3 className={classes.errorMessage}>{errors.message}</h3>
        ) : null}
        <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
          <div className={classes.inputBox}>
            <input name="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <label className={classes.errorMessage}>
                {formik.errors.email}
              </label>
            ) : (
              <label className={classes.labelText} htmlFor="email">
                Email Address
              </label>
            )}
          </div>

          <div className={classes.inputBox}>
            <input
              name="password"
              type="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <label className={classes.errorMessage}>
                {formik.errors.password}
              </label>
            ) : (
              <label className={classes.labelText} htmlFor="password">
                Password
              </label>
            )}
          </div>

          <div className={classes.inputBox}>
            <input name="firstName" {...formik.getFieldProps("firstName")} />
          </div>

          {formik.touched.firstName && formik.errors.firstName ? (
            <label className={classes.errorMessage}>
              {formik.errors.firstName}
            </label>
          ) : (
            <label className={classes.labelText} htmlFor="firstName">
              First Name
            </label>
          )}

          <div className={classes.inputBox}>
            <input name="lastName" {...formik.getFieldProps("lastName")} />
            {formik.touched.lastName && formik.errors.lastName ? (
              <label className={classes.errorMessage}>
                {formik.errors.lastName}
              </label>
            ) : (
              <label className={classes.labelText} htmlFor="lastName">
                Last Name
              </label>
            )}
          </div>
          <div className={classes.submitButtonContainer}>
            <button className={classes.submitButton} type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className={classes.loginSignupButtonContainer}>
          <a
            className={classes.loginSignupButton}
            onClick={() => props.loginSwitcher()}
          >
            Click to Log in
          </a>
        </div>
        <div className={classes.loginSignupButtonContainer}>
          <a className={classes.demoButton} onClick={demoButton}>
            Demo
          </a>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
