import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import registerServiceWorker from "./registerServiceWorker";
import { Provider, connect } from "react-redux";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  rootElement
);

registerServiceWorker();
