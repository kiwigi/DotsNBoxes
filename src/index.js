import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import './stylesheet.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Game from './Game';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='Game' element={<Game/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
  
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

