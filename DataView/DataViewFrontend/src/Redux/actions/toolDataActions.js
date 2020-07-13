import {
  LOADING_TOOL_DATA,
  GET_TOOL_DATA_ALL,
  GET_TOOL_DATA,
  POST_TOOL_DATA,
  UPDATE_TOOL_DATA,
  DELETE_TOOL_DATA,
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
