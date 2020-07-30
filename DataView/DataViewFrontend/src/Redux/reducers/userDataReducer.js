import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_USER_INFORMATION,
  SET_USER_IMAGE,
} from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  loading: false,
  image: null,
  role: null,
  description: null,
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };

    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };

    case SET_UNAUTHENTICATED:
      return {
        authenticated: false,
      };

    case SET_USER:
      console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        credentials: action.payload,
        loading: false,
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case SET_USER_IMAGE:
      return {
        ...state,
        image: action.payload.Image,
      };
    case SET_USER_INFORMATION:
      return {
        ...state,
        description: action.payload.UserDescription,
        role: action.payload.Role,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };

    default:
      return state;
  }
}
