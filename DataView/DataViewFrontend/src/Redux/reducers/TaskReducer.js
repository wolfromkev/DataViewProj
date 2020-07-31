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

const initialState = {
  loading: false,
  loadingCreateTask: false,
  loadingCompleteTask: false,
  loadingUpdateTask: false,
  loadingDeleteTask: false,
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
      console.log(action.payload);
      let updatedArray = state.tasks;
      let tempIndex = updatedArray.findIndex((a) => a.id === action.payload.Id);
      updatedArray[tempIndex].title = action.payload.Title;
      updatedArray[tempIndex].description = action.payload.Description;
      updatedArray[tempIndex].end = action.payload.End;

      return {
        ...state,
        tasks: updatedArray,
        loadingUpdateTask: false,
      };

    case CREATE_TASKS:
      let createTasks = state.tasks;
      createTasks.concat(action.payload);
      return {
        ...state,
        tasks: createTasks,
        loadingCreateTask: false,
      };

    case DELETE_TASK:
      let tempTasks = state.tasks.filter((a) => a.id !== action.payload);
      return {
        ...state,
        tasks: tempTasks,
        loadingDeleteTask: false,
      };
    case COMPLETE_TASK:
      let updateArray = state.tasks;
      for (let i = 0; i < action.payload.length; i++) {
        let tempIndex = updateArray.findIndex(
          (a) => a.id === action.payload[i].taskId
        );
        updateArray[tempIndex].completed = action.payload[i].status;
      }
      return {
        ...state,
        tasks: updateArray,
        loadingCompleteTask: false,
      };
    case CREATE_TASKS_LOADING:
      return {
        ...state,
        loadingCreateTask: true,
      };
    case UPDATE_TASK_LOADING:
      return {
        ...state,
        loadingUpdateTask: true,
      };

    case DELETE_TASK_LOADING:
      return {
        ...state,
        loadingDeleteTask: true,
      };
    case COMPLETE_TASK_LOADING:
      return {
        ...state,
        loadingCompleteTask: true,
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
        loadingCreateTask: false,
        loadingCompleteTask: false,
        loadingUpdateTask: false,
        loadingDeleteTask: false,
      };

    default:
      return state;
  }
}
