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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

