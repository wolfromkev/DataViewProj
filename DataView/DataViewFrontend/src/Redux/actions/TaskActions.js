import {
  SET_TASKS,
  FETCH_DATA,
  SET_TASK_ERRORS,
  CLEAR_TASK_ERRORS,
  COMPLETE_TASK,
  COMPLETE_TASK_LOADING,
  UPDATE_TASK,
  UPDATE_TASK_LOADING,
  CREATE_TASKS,
  CREATE_TASKS_LOADING,
  DELETE_TASK,
  DELETE_TASK_LOADING,
} from "../types";

import Axios from "axios";

export const GetTasks = (userId) => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  Axios.get(`/Task/GetTasks/${userId}`)
    .then((res) => {
      dispatch({ type: SET_TASKS, payload: res.data });
      dispatch({ type: CLEAR_TASK_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_TASK_ERRORS,
        payload: err.response.data,
      });
    });
};

export const CreateTasks = (taskObj) => (dispatch) => {
  dispatch({ type: CREATE_TASKS_LOADING });
  Axios.post(`/Task/CreateTasks`, taskObj)
    .then((res) => {
      dispatch({ type: CREATE_TASKS, payload: res.data });
      dispatch({ type: CLEAR_TASK_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_TASK_ERRORS,
        payload: err.response.data,
      });
    });
};

export const UpdateTask = (taskObj) => (dispatch) => {
  dispatch({ type: UPDATE_TASK_LOADING });
  Axios.patch(`/Task/UpdateTask`, taskObj)
    .then((res) => {
      dispatch({ type: UPDATE_TASK, payload: taskObj });
      dispatch({ type: CLEAR_TASK_ERRORS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_TASK_ERRORS,
        payload: err.response.data,
      });
    });
};

export const CompleteTask = (taskObj) => (dispatch) => {
  dispatch({ type: COMPLETE_TASK_LOADING });
  Axios.patch(`/Task/CompleteTask`, taskObj)
    .then((res) => {
      dispatch({ type: COMPLETE_TASK, payload: taskObj });
      dispatch({ type: CLEAR_TASK_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_TASK_ERRORS,
        payload: err.response.data,
      });
    });
};

export const DeleteTask = (taskId) => (dispatch) => {
  dispatch({ type: DELETE_TASK_LOADING });
  Axios.delete(`/Task/DeleteTask/${taskId}`)
    .then((res) => {
      dispatch({ type: DELETE_TASK, payload: taskId });
      dispatch({ type: CLEAR_TASK_ERRORS });
    })
    .catch((err) => {
      dispatch({
        type: SET_TASK_ERRORS,
        payload: err.response.data,
      });
    });
};
