import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const page =(
  <div>
    <img src='./logo192.png' width= "40px" />
    <h1>React Facts</h1>
    <ul>
      <li>Released in 2013</li>
      <li>Created by Jordan Walke</li>
      <li>Maintained by facebook</li>
    </ul>
  </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(page)

reportWebVitals();
