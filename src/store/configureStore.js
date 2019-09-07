import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducer";
import rootSaga from "../sagas";

let composeEnhancers = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
