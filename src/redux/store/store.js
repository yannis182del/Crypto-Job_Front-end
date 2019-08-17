import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import jobReducer from '../reducers/job';

const reducer = combineReducers({
  job: jobReducer,
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
