import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/css/style.css';
import Layout from "./Layout";
import DesignSystem from './pages/DesignSystem';

ReactDOM.render(
  <Layout>
    <DesignSystem/>
  </Layout>,
  document.getElementById('root')
);
