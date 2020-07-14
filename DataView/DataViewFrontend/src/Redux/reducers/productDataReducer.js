import { LOADING_PRODUCT_DATA, GET_PRODUCT_DATA } from "../types";

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
