import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Utiliza createRoot para inicializar la aplicación en React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
