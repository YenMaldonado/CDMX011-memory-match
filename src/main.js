//import {App} from './components/App.js';
import data from '../data/webdev/webdev.js';
//console.log(data);
const setData = document.getElementById('root');

getCards();

function getCards (){
    setData.innerHTML = "";
    let newArr = data.items;
    let cloneArr = newArr;
    cloneArr = cloneArr.concat(newArr);
    cloneArr.forEach(printCard =>{
    let mainCards = document.createElement("div");
    mainCards.innerHTML = `
    <img src="${printCard.image} " height= "120px"; width= "100px;"/>
    `;
    setData.appendChild(mainCards); 
     //console.log(showCards);
     return printCard;
    })
    
}

