import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

export const Middleware = applyMiddleware(thunk, logger);
