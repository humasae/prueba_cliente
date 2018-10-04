import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

checkLocalStorage();

function checkLocalStorage(){
    let hours = 24
    let now = new Date().getTime();
    let setupTime = localStorage.getItem('setupTime');
    
    if(setupTime == null){
        localStorage.setItem('setupTime', now);
    }else{
        if(now-setupTime > hours*60*60*1000){
            localStorage.clear();
            localStorage.setItem('setupTime', now);
        }
    }
}

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
