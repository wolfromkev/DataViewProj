import {
  FETCH_EVENT_DATA,
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  SET_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS,
  DELETE_EVENT,
} from "../types";

import Axios from "axios";

export const GetEvents = (userId) => (dispatch) => {
  dispatch({ type: FETCH_EVENT_DATA });
  Axios.get(`/Event/GetEvents/${userId}`)
    .then((res) => {
      dispatch({ type: GET_EVENTS, payload: res.data });
      dispatch({ type: CLEAR_EVENT_ERRORS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_EVENT_ERRORS,
        payload: err.response.data,
      });
    });
};

export const CreateEvent = (eventObj) => (dispatch) => {
  dispatch({ type: FETCH_EVENT_DATA });
  Axios.post(`/Event/CreateEvent`, eventObj)
    .then((res) => {
      dispatch({ type: CREATE_EVENT, payload: res.data });
      dispatch({ type: CLEAR_EVENT_ERRORS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_EVENT_ERRORS,
        payload: err.response.data,
      });
    });
};

export const UpdateEvents = (eventObj, userId) => (dispatch) => {
  dispatch({ type: FETCH_EVENT_DATA });
  Axios.patch(`/Event/UpdateEvents/${userId}`, eventObj)
    .then((res) => {
      dispatch({ type: UPDATE_EVENT, payload: eventObj });
      dispatch({ type: CLEAR_EVENT_ERRORS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_EVENT_ERRORS,
        payload: err.response.data,
      });
    });
};

export const DeleteEvent = (eventId, userId) => (dispatch) => {
  dispatch({ type: FETCH_EVENT_DATA });
  Axios.delete(`/Task/DeleteEvent/${eventId}+${userId}`)
    .then((res) => {
      dispatch({ type: DELETE_EVENT, payload: eventId });
      dispatch({ type: CLEAR_EVENT_ERRORS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_EVENT_ERRORS,
        payload: err.response.data,
      });
    });
};
