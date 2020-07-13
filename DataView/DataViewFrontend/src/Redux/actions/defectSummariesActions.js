import {
  LOADING_TOOL_DATA,
  DICE_DEFECT_BY_PROD,
  GRIND_DEFECT_BY_PROD,
  POLISH_DEFECT_BY_PROD,
  START_DEFECT_BY_PROD,
  COAT_DEFECT_BY_PROD,
  ETCH_DEFECT_BY_PROD,
  DICE_DEFECT_SUM,
  GRIND_DEFECT_SUM,
  POLISH_DEFECT_SUM,
  START_DEFECT_SUM,
  COAT_DEFECT_SUM,
  ETCH_DEFECT_SUM,
  LOADING_DEFECT_DATA,
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
