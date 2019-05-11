import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import AppCtn from "./appContainer";

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <AppCtn />
  </Provider>,
  document.getElementById("root")
);
