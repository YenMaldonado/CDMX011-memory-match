import Header from './components/header/Header.js';
import App from './components/App.js';
//import Shuffle from './helpers/shuffle.js'

const rootElement = document.getElementById('root');
const containHeader = Header();
rootElement.appendChild(containHeader);
rootElement.appendChild(App()); 



 