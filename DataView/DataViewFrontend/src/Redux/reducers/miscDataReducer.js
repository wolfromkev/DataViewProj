import {
  LOADING_MISC_DATA,
  GET_WEEKLY_YIELD_DATA,
  GET_UPCOMING_PROD_DATA,
  SEARCH_USERS,
  SET_USERS,
  CLEAR_USERS,
} from "../types";

const initialState = {
  loading: false,
  loadingUserData: false,
  yieldData: [],
  searchedUsers: [],
  upcomingProductData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_MISC_DATA:
      return {
        ...state,
        loading: true,
      };
    case GET_WEEKLY_YIELD_DATA:
      return {
        ...state,
        yieldData: action.payload,
        loading: false,
      };
    case GET_UPCOMING_PROD_DATA:
      return {
        ...state,
        upcomingProductData: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        loadingUserData: true,
      };
    case SET_USERS:
      return {
        ...state,
        searchedUsers: action.payload,
        loadingUserData: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        searchedUsers: [],
        loadingUserData: false,
      };

    default:
      return state;
  }
}
