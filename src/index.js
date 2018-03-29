import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080/api/';

axios.interceptors.request.use(request =>{
    console.log("Intercepted Request:"+ request);
    return request;
}, error=>{
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response =>{
    console.log("Intercepted Response:" + response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
