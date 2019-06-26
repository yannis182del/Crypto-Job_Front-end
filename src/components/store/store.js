import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import jobReducer from "../reducers/job";

const reducer = combineReducers({
  job: jobReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
