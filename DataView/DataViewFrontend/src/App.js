import React, { useEffect } from "react";
import classes from "./App.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { getAllProductData } from "./Redux/actions/productDataActions";

import NavbarComponent from "./Components/NavbarComponent";
import Dashboard from "./Pages/Dashboard";
import ProductView from "./Pages/ProductView";
import ToolView from "./Pages/ToolView";
import store from "./Redux/store";
import {
  getUpcomingProductData,
  getUserData,
  getYieldData,
} from "./Redux/actions/miscDataActions";

axios.defaults.baseURL = "https://dataviewbackend.azurewebsites.net/api";

export default function App() {
  useEffect(() => {
    store.dispatch(getAllProductData());
    store.dispatch(getYieldData());
    store.dispatch(getUserData());
    store.dispatch(getUpcomingProductData());
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <div className={classes.container}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/productview" component={ProductView} />
            <Route exact path="/toolview" component={ToolView} />
          </div>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
