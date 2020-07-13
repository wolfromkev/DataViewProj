import {
  LOADING_PRODUCT_DATA,
  GET_PRODUCT_DATA_ALL,
  GET_PRODUCT_DATA,
  GET_PRODUCT_DATA_START,
  GET_PRODUCT_DATA_COAT,
  GET_PRODUCT_DATA_DICE,
  GET_PRODUCT_DATA_ETCH,
  GET_PRODUCT_DATA_GRIND,
  GET_PRODUCT_DATA_POLISH,
  SET_PRODUCT_DATA,
} from "../types";

import axios from "axios";

export const getAllProductData = () => (dispatch) => {
  dispatch({ type: LOADING_PRODUCT_DATA });
  axios
    .get("/productdata")
    .then((res) => {
      dispatch({
        type: GET_PRODUCT_DATA,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCT_DATA,
        payload: [],
      });
    });
};
