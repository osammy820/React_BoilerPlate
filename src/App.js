import React from 'react';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Authentication/Login';
import routes from './components/strings/routes';
import endpoints from './components/strings/endpoints';

function App() {
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.baseURL =`${endpoints.BASE_URL}`;

  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return (
    <Routes>
      <Route path={routes.INITIAL_ROUTE} element={<Login/>}/>
    </Routes>
  );
}

export default App;
