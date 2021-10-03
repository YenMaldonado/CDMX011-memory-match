import Header from './components/header/Header.js';
import {App} from './components/App.js';

const rootElement = document.getElementById('root');
const containHeader = Header();
rootElement.appendChild(containHeader);
rootElement.appendChild(App()); 
//Match();
//rootElement.appendChild(clickCard);

let eventClick = document.querySelectorAll('.viewCardsActive');
   // console.log(eventClick);
    for(let i = 0; i < eventClick.length; i++){
        eventClick[i].addEventListener('click', function() {
            console.log(eventClick[i]);
            let idAttribute = eventClick[i].getAttribute('id');
            //let findTechnology = data.items.find((toolName) => {})
                return idAttribute;
            
            //console.log(idAttribute); 
        })

    }

 