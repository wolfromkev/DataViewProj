import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import classes from "./LandingPage.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../../Redux/actions/userDataActions";

function LoginForm(props) {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object().shape({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().min(6).label("Password"),
    }),

    onSubmit: (values) => {
      const userData = { email: values.email, password: values.password };
      props.loginUser(userData);
    },
  });

  const demoButton = () => {
    const userData = { email: "kevin", password: "kevin" };
    props.loginUser(userData);
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.welcomeHeader}>Login</h2>
        {errors ? (
          <h3 className={classes.errorMessage}>{errors.message}</h3>
        ) : null}
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
            <button className={classes.submitButton} type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className={classes.loginSignupButtonContainer}>
          <button
            className={classes.loginSignupButton}
            onClick={() => props.loginSwitcher()}
          >
            Click to sign up
          </button>
        </div>
        <div className={classes.loginSignupButtonContainer}>
          <button className={classes.demoButton} onClick={demoButton}>
            {" "}
            Demo
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  errors: state.userData.errors,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
