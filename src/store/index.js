import createSagaMiddleware from "@redux-saga/core";
import { createStore, compose, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga/index";
import rootreducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = compose;

const store = createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
