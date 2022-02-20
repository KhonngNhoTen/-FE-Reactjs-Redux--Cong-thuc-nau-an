import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Login, Register, ForgetPassword } from './Components/Auth'
import App from './App';
import PrivateRoute from './Components/PrivateRoute';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/login' element={<Login/>} />
        <Route path = '/register' element={<Register/>} />
        <Route path = '/forget-password' element={<ForgetPassword/>} />
        <Route path='/' 
          element = {<PrivateRoute component={<App/>} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
