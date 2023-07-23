import React from 'react';
import ReactDOM  from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';
import Topbar from './componant/Topbar'; 
import Header from './componant/Header';
import Navbar from './componant/Navbar';
import Main from './componant/Main';
import Footer from './componant/Footer';
import Slider from './componant/Slider';
import Responsive from './componant/Slider2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const test=ReactDOM.createRoot(document.getElementById('bootstrap'))
test.render(
    <>
    <Topbar/>
    <Header/>
    <Navbar/>
    <Slider/>
    <Main/>
    <Responsive/>
    <Footer/>
    </>
);
reportWebVitals();