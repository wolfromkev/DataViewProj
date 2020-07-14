import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_USER,
  SET_UNAUTHENTICATED,
  SET_USER,
} from "../types";

import Axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  console.log("hello");
  dispatch({ type: LOADING_USER });
  Axios.post("/UserData/authenticate", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({ type: SET_USER, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/dashboard";
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signUpUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  Axios.post("/UserData/register", newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({ type: SET_USER, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
      window.location.href = "/dashboard";
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  console.log("hello");
  localStorage.removeItem("AuthToken");
  delete Axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.href = "/";
};

const setAuthorizationHeader = (token) => {
  const AuthToken = `Bearer ${token}`;
  localStorage.setItem("AuthToken", AuthToken);
  Axios.defaults.headers.common[`Authorization`] = AuthToken;
};
