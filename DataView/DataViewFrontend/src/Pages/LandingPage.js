import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./LandingPage.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";

function LandingPage() {
  const [login, setLogin] = useState(true);

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
      console.log("submit");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.container}>
      <h2 className={classes.welcomeHeader}> {login ? "Sign up" : "Login"} </h2>
      {login ? (
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
            <a className={classes.submitButton} onClick={formik.handleSubmit}>
              Submit
            </a>
          </div>
        </form>
      ) : (
        <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
          <div className={classes.inputBox}>
            <input name="email" {...formik.getFieldProps("email")} />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <label className={classes.errorMessage}>
              {formik.errors.email}
            </label>
          ) : (
            <label className={classes.labelText} htmlFor="email">
              Email Address
            </label>
          )}

          <div className={classes.inputBox}>
            <input
              name="password"
              type="password"
              {...formik.getFieldProps("password")}
            />
          </div>

          {formik.touched.password && formik.errors.password ? (
            <label className={classes.errorMessage}>
              {formik.errors.password}
            </label>
          ) : (
            <label className={classes.labelText} htmlFor="password">
              Password
            </label>
          )}
          <div className={classes.submitButtonContainer}>
            <a className={classes.submitButton}>Submit</a>
          </div>
        </form>
      )}
      <div className={classes.loginSignupButtonContainer}>
        <a
          className={classes.loginSignupButton}
          onClick={() => setLogin(!login)}
        >
          {login ? "Click to sign up" : "Click to Log in"}
        </a>
      </div>
      <div className={classes.loginSignupButtonContainer}>
        <a className={classes.demoButton}> Demo</a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
