import data from '../data/webdev/webdev.js';
import {Card} from './Card.js'
import { shuffle } from '../helpers/shuffle.js'

let dataDuplicate = data.items;
console.log('Aqui se usa la data random', shuffle())
dataDuplicate = dataDuplicate.concat(data.items);

export const App = ()=> {
  const container = document.createElement('section')
  container.className = 'showCards'
  dataDuplicate.forEach(tecnologia=>{
    container.appendChild(Card(tecnologia))
  })
  

  return container;
  //for(let i = items.length -1; i>0; i--){
  //   let j = Math.floor(Math.random()* (i+1));
  //   [items[i], items[j]] = [items[j], items[i]];
  //   }
};
export default App;
