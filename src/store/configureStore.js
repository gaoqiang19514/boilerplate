import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from '../reducer'

let composeEnhancers = compose;

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}

const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];

export default function configureStore(initialState) {
  return createStore(reducer, initialState, composeEnhancers(...enhancers));
}
