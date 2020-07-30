import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_USER,
  SET_UNAUTHENTICATED,
  SET_USER,
  UPDATE_USER_IMAGE,
  UPDATE_USER_DATA,
  SET_USER_INFORMATION,
  SET_USER_IMAGE,
} from "../types";

import Axios from "axios";

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  Axios.post("/UserData/authenticate", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({ type: SET_USER, payload: res.data });
      window.location.href = "/dashboard";
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signUpUser = (data) => (dispatch) => {
  Axios.post("/UserData/register", data)
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

export const UpdateUserData = (data) => (dispatch) => {
  dispatch({ type: UPDATE_USER_DATA });
  Axios.patch("/UserData/UpdateUserData", data)
    .then((res) => {
      dispatch({ type: SET_USER_INFORMATION, payload: data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const UpdateUserImage = (data) => (dispatch) => {
  dispatch({ type: UPDATE_USER_IMAGE });
  Axios.patch("/UserData/UpdateUserImage", data)
    .then((res) => {
      dispatch({ type: SET_USER_IMAGE, payload: data });
      dispatch({ type: CLEAR_ERRORS });
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
