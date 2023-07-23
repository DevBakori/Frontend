import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Blog from './Components/customer/Blog';
import Account from './Components/customer/Account';
import Layout from './Components/customer/Layout';
import Store from './Components/customer/Store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
