import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

