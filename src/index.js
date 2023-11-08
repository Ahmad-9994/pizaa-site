import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context} from './context/Context'; // Import the context variable correctly

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
reportWebVitals();
