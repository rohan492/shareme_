import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';
import GoogleProvider from './GoogleProvider'; //to pass Google client Id(unable to pass it as an environment variable)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleProvider>
  <Router>
    <App />
  </Router>
  </GoogleProvider>
);