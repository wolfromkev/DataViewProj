import {
  SET_TASKS,
  FETCH_DATA,
  UPDATE_TASK,
  ADD_CREATED_TASKS,
  DELETE_TASK,
  SET_ERRORS,
  CLEAR_ERRORS,
} from "../types";

const initialState = {
  loading: false,
  assigneeTasks: [],
  assignerTasks: [],
  personalTasks: [],
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      //filter tasks into assigned and assignee using two variables, seperate them into assignee and assigner.
      //Also make one for self-tasks.

      let setAssigneeTasks = action.payload;
      let setAssignerTasks = action.payload;
      let setPersonalTasks = action.payload;
      return {
        ...state,
        assigneeTasks: state.assigneeTasks.concat(setAssigneeTasks),
        assignerTasks: state.assignerTasks.concat(setAssignerTasks),
        personalTasks: state.personalTasks.concat(setPersonalTasks),
        loading: false,
      };

    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_TASK:
      //Return updated task on backend, replace the updated task w/ the response from server.
      return {
        ...state,
      };

    case ADD_CREATED_TASKS:
      //Append new tasks to the list.
      let addAssigneeTasks = action.payload;
      let addAssignerTasks = action.payload;
      let addPersonalTasks = action.payload;
      return {
        ...state,
        assigneeTasks: [...state.assigneeTasks, addAssigneeTasks],
        assignerTasks: [...state.assignerTasks, addAssignerTasks],
        personalTasks: [...state.personalTasks, addPersonalTasks],
        loading: false,
      };

    case DELETE_TASK:
      //Upon succseful delete, respond w/ the event ID. Use that to filter out
      return {
        ...state,
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: false,
      };

    default:
      return state;
  }
}
