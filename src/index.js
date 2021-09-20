// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './reset.css';
// Components
import App from './App';
// Tests
import reportWebVitals from './_tests_/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
