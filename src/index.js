import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Friends from './Friends';
import Home from './Home';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
