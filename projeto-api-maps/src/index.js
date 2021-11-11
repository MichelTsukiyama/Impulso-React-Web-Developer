import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
require('dotenv').config()

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
