import {
  LOADING_MISC_DATA,
  GET_WEEKLY_YIELD_DATA,
  GET_UPCOMING_PROD_DATA,
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
