import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Toaster } from 'react-hot-toast';

// styles
import './global.scss';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Toaster position="top-right"
      reverseOrder={false}
    />
    <App/>
  </React.StrictMode>,
  document.getElementById('__ROOT_APP__')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
