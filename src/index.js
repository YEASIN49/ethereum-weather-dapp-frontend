import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WeatherContextProvider } from './services/WeatherContext'


ReactDOM.render(
  <WeatherContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WeatherContextProvider>
  ,document.getElementById('root')
)
