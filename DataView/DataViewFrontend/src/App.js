import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { getAllProductData } from "./Redux/actions/productDataActions";
import {
  getUpcomingProductData,
  getYieldData,
} from "./Redux/actions/miscDataActions";
import { logoutUser } from "./Redux/actions/userDataActions";

import NavbarComponent from "./Components/NavbarComponent";
import Dashboard from "./Pages/Dashboard";
import ProductView from "./Pages/ProductView";
import LandingPage from "./Pages/LandingPage";

axios.defaults.baseURL = "https://dataviewbackend.azurewebsites.net/api";

const token = localStorage.AuthToken;

function App(props) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        props.logoutUser();
      } else {
        axios.defaults.headers.common["Authorization"] = token;
        setAuth(true);
      }
    }
  }, [props.authenticated]);

  useEffect(() => {
    props.getAllProductData();
    props.getYieldData();
    props.getUpcomingProductData();
  }, []);

  return (
    <BrowserRouter>
      {!auth ? (
        <Route exact path="/" component={LandingPage} />
      ) : (
        <>
          {" "}
          <NavbarComponent />
          <Switch>
            <div className={classes.container}>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/productview" component={ProductView} />
            </div>
          </Switch>{" "}
        </>
      )}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.userData.authenticated,
});

const mapDispatchToProps = {
  getUpcomingProductData,
  getYieldData,
  getAllProductData,
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
