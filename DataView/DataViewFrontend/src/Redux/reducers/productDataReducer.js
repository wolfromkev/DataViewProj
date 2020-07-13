import {
  LOADING_PRODUCT_DATA,
  GET_PRODUCT_DATA_ALL,
  GET_PRODUCT_DATA,
  GET_PRODUCT_DATA_START,
  GET_PRODUCT_DATA_COAT,
  GET_PRODUCT_DATA_DICE,
  GET_PRODUCT_DATA_ETCH,
  GET_PRODUCT_DATA_GRIND,
  GET_PRODUCT_DATA_POLISH,
} from "../types";

const initialState = {
  loading: false,
  productData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_PRODUCT_DATA:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
