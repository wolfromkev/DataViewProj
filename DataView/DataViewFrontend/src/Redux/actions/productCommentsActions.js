import {
  LOADING_COMMENT_DATA,
  GET_PRODUCT_COMMENT_ALL,
  GET_PRODUCT_COMMENT,
  POST_PRODUCT_COMMENT,
  UPDATE_PRODUCT_COMMENT,
  DELETE_PRODUCT_COMMENT,
} from "../types";

import axios from "axios";

export const getBarks = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/barks")
    .then((res) => {
      dispatch({
        type: SET_BARKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BARKS,
        payload: [],
      });
    });
};
