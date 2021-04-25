import React from "react";
import ReactDOM from "react-dom";
// This createStore function is from redux, we could pass down through App and we would be able to access the Redux store.
import { createStore } from "redux";
//To avoid passing store as a prop, we use the Provider component, which is imported from react-redux.
import { Provider } from "react-redux";
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById("root")
);

