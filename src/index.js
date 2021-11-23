import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Toaster } from 'react-hot-toast';
import GeoTracker from './components/Location/GeoTracker';

// styles
import './global.scss';
import './index.css'

let geoDetails = {};
let latitude = 1;
let longitude = 1;

if(localStorage.getItem('geo_data') !== null){
    geoDetails = JSON.parse(localStorage.getItem('geo_data') || '');
    latitude = geoDetails.latitude;
    longitude = geoDetails.longitude;
}

ReactDOM.render(
  <React.StrictMode>
    <Toaster position="top-right"
      reverseOrder={false}
    />
    
    {/* Tracker */}
    <GeoTracker lat={latitude} long={longitude}/>

    <App/>
  </React.StrictMode>,
  document.getElementById('__ROOT_APP__')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
