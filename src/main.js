import App from './components/App.js';
import data from '../data/webdev/webdev.js';

const setData = document.getElementById('root');
let cloneArr = data.items;
cloneArr = cloneArr.concat(data.items);
App(cloneArr);
getCards(cloneArr);

document.querySelector("#start").addEventListener("click",() => { 
    App(cloneArr);
    getCards(cloneArr);
});

function getCards (items){
    setData.innerHTML = ""
    items.forEach(printCard =>{
    let mainCards = document.createElement("div");
    mainCards.innerHTML = `
    <img src="${printCard.image} " height= "120px"; width= "100px;"/>
    `;
    setData.appendChild(mainCards); 
     return printCard;
    })
    
}

