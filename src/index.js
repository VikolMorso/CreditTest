import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreditContainer from './CREDIT TESTO/CreditContainer';
import reportWebVitals from './reportWebVitals';
import store from './CREDIT TESTO/state/redux';

ReactDOM.render(
  <React.StrictMode>
    <CreditContainer store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
