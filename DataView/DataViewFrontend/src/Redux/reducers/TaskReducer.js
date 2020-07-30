import {
  SET_TASKS,
  FETCH_DATA,
  UPDATE_TASK,
  CREATE_TASKS,
  DELETE_TASK,
  SET_TASK_ERRORS,
  CLEAR_TASK_ERRORS,
  COMPLETE_TASK,
} from "../types";

const initialState = {
  loading: false,
  tasks: [],
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_TASK:
      let updatedArray = state.tasks;
      let tempIndex = updatedArray.indexOf(action.payload.id);
      updatedArray[tempIndex].status = action.payload.status;
      updatedArray[tempIndex].description = action.payload.description;
      updatedArray[tempIndex].end = action.payload.end;

      return {
        ...state,
        tasks: updatedArray,
        loading: false,
      };

    case CREATE_TASKS:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
        loading: false,
      };

    case DELETE_TASK:
      let tempTasks = state.tasks.filter((a) => a.Id == action.payload);
      return {
        ...state,
        tasks: tempTasks,
        loading: false,
      };

    case SET_TASK_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    case CLEAR_TASK_ERRORS:
      return {
        ...state,
        errors: false,
        loading: false,
      };
    case COMPLETE_TASK:
      let updateArray = state.tasks[0];
      let userId = state.tasks[1];
      for (let i = 0; i < action.payload.length; i++) {
        let tempIndex = updateArray.findIndex(
          (a) => a.id == action.payload[i].taskId
        );
        updateArray[tempIndex].completed = action.payload[i].status;
      }
      return {
        ...state,
        tasks: [updateArray, userId],
        loading: false,
      };

    default:
      return state;
  }
}
