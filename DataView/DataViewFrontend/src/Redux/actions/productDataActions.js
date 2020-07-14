import { LOADING_PRODUCT_DATA, GET_PRODUCT_DATA } from "../types";

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
