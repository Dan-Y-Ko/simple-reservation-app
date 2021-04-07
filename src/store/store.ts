import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
