import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productDataReducer from "./reducers/productDataReducer";
import miscDataReducer from "./reducers/miscDataReducer";
import userDataReducer from "./reducers/userDataReducer";
import TaskReducer from "./reducers/TaskReducer";
import EventReducer from "./reducers/EventReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducers = combineReducers({
  miscData: miscDataReducer,
  productData: productDataReducer,
  userData: userDataReducer,
  tasks: TaskReducer,
  events: EventReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
