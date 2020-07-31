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
import { GetEvents } from "./Redux/actions/EventActions";
import { GetTasks } from "./Redux/actions/TaskActions";

import NavbarComponent from "./Components/NavbarComponent";
import Dashboard from "./Pages/Dashboard";
import ProductView from "./Pages/ProductView";
import LandingPage from "./Pages/LandingPage";
import UserView from "./Pages/UserView";

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
  }, [token]);

  if (props.authenticated) {
    if (props.productData.length === 0) {
      props.getAllProductData();
    }
    if (props.yieldData.length === 0) {
      props.getYieldData();
    }
    if (props.upcomingProductData.length === 0) {
      props.getUpcomingProductData();
    }
    if (props.taskData.length === 0) {
      props.GetTasks(props.userData.id);
    }
    if (props.eventData.length === 0) {
      props.GetEvents(props.userData.id);
    }
  }
  return (
    <BrowserRouter>
      {!auth ? (
        <Route exact path="/" component={LandingPage} />
      ) : (
        <>
          {" "}
          <NavbarComponent persitor={props.persistBool} />
          <Switch>
            <div className={classes.container}>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/productview" component={ProductView} />
              <Route exact path="/profile" component={UserView} />
            </div>
          </Switch>{" "}
        </>
      )}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.userData.authenticated,
  userData: state.userData.credentials,
  productData: state.productData.productData,
  yieldData: state.miscData.yieldData,
  upcomingProductData: state.miscData.upcomingProductData,
  taskData: state.tasks.tasks,
  eventData: state.events.eventData,
});

const mapDispatchToProps = {
  getUpcomingProductData,
  getYieldData,
  getAllProductData,
  logoutUser,
  GetEvents,
  GetTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
