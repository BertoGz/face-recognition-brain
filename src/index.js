import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tachyons";
import * as serviceWorker from "./serviceWorker";
import { NativeBaseProvider } from "native-base";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Redux/Reducers";
import { Middleware } from "./Redux";
export const store = createStore(rootReducer, Middleware);

ReactDOM.render(
  <NativeBaseProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </NativeBaseProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
