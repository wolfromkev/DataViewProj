import {
  FETCH_EVENT_DATA,
  GET_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  SET_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS,
  DELETE_EVENT,
} from "../types";

const initialState = {
  loading: false,
  eventData: [],
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      console.log(action.payload);
      return {
        ...state,
        eventData: action.payload,
        loading: false,
      };

    case FETCH_EVENT_DATA:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_EVENT:
      let tempUpdateData = state.eventData.slice();
      let tempEvent = tempUpdateData.find((e) => e.Id == action.payload.Id);
      tempUpdateData.filter((e) => e.Id == action.payload.Id);
      return {
        ...state,
        eventData: tempUpdateData.push(tempEvent),
      };

    case CREATE_EVENT:
      let addAssigneeTasks = action.payload;
      return {
        ...state,
        eventData: state.assigneeTasks.concat(addAssigneeTasks),
        loading: false,
      };

    case DELETE_EVENT:
      let tempEventData = state.eventData.slice();
      tempEventData.filter((e) => e.Id == action.payload);
      return {
        ...state,
        eventData: tempEventData,
      };

    case SET_EVENT_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    case CLEAR_EVENT_ERRORS:
      return {
        ...state,
        errors: false,
      };

    default:
      return state;
  }
}
