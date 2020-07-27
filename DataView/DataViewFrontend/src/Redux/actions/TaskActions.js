import {
  SET_TASKS,
  ADD_CREATED_TASKS,
  CREATE_TASKS,
  UPDATE_TASK,
  DELETE_TASK,
  CREATE_TASKS,
  FETCH_DATA,
  SET_ERRORS,
  CLEAR_ERRORS,
} from "../types";

import Axios from "axios";

export const GetTasks = (userId) => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  Axios.post(`/EventTask/GetEventTasks/${userId}`)
    .then((res) => {
      dispatch({ type: SET_TASKS, payload: res.data });
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

export const CreateTasks = (taskObj) => (dispatch) => {
  dispatch({ type: CREATE_TASKS });
  Axios.post(`/EventTask/GetEventTasks/`, taskObj)
    .then((res) => {
      dispatch({ type: ADD_CREATED_TASKS, payload: taskObj });
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
