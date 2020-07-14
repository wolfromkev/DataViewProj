import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import productDataReducer from "./reducers/productDataReducer";
import miscDataReducer from "./reducers/miscDataReducer";
import userDataReducer from "./reducers/userDataReducer";

const initialState = {};

const reducers = combineReducers({
  miscData: miscDataReducer,
  productData: productDataReducer,
  userData: userDataReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
