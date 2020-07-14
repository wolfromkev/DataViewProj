import {
  LOADING_MISC_DATA,
  GET_WEEKLY_YIELD_DATA,
  GET_UPCOMING_PROD_DATA,
} from "../types";

const initialState = {
  loading: false,
  yieldData: [],
  userData: [],
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

    default:
      return state;
  }
}
