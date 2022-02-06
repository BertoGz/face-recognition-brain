/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./Reducers";

function configureStore() {
  const middleware = [];

  middleware.push(thunk);
  if (false) {
    middleware.push(logger);
  }

  return createStore(rootReducer, applyMiddleware(...middleware));
}

export const store = configureStore();
