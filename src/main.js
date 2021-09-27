import Header from './components/header/Header.js';
import App from './components/App.js';
//import {Shuffle} from './helpers/shuffle.js'

//const insertHeader = document.querySelector('#mainContent');
const rootElement = document.getElementById('root');
const containHeader = Header();
//insertHeader.appendChild(containHeader);
rootElement.appendChild(containHeader);

rootElement.appendChild(App()); 


//document.querySelector(".startBtn").addEventListener("click", Shuffle());
 