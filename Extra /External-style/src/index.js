import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';  
// import '../src/style.css';
import reportWebVitals from './reportWebVitals'; 
import Reg from './componants/Reg';
import 'fontawesome-4.7/css/font-awesome.min.css';

const  root=ReactDOM.createRoot(document.getElementById("external-style"));
root.render(
<Reg />
);
 reportWebVitals();