import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./styles/styles.scss"
import "normalize.css"
import AppRouter from "./Router/AppRouter"
import store from "../src/redux/store"
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
      <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
