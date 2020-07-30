import {
  LOADING_MISC_DATA,
  GET_WEEKLY_YIELD_DATA,
  GET_UPCOMING_PROD_DATA,
  SEARCH_USERS,
  SET_USERS,
} from "../types";

import axios from "axios";

export const getYieldData = () => (dispatch) => {
  dispatch({ type: LOADING_MISC_DATA });
  axios
    .get("/GetOnlyData/GetWeeklyYieldDatas")
    .then((res) => {
      dispatch({
        type: GET_WEEKLY_YIELD_DATA,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_WEEKLY_YIELD_DATA,
        payload: [],
      });
    });
};

export const getUpcomingProductData = () => (dispatch) => {
  dispatch({ type: LOADING_MISC_DATA });
  axios
    .get("/GetOnlyData/GetUpcomingProductData")
    .then((res) => {
      dispatch({
        type: GET_UPCOMING_PROD_DATA,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_UPCOMING_PROD_DATA,
        payload: [],
      });
    });
};

export const searchUserData = (query) => (dispatch) => {
  dispatch({ type: SEARCH_USERS });
  axios
    .get(`/UserData/searchUserData/${query}`)
    .then((res) => {
      dispatch({
        type: SET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_UPCOMING_PROD_DATA,
        payload: [],
      });
    });
};
