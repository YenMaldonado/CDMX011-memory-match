import data from '../data/webdev/webdev.js';
import {Card} from './Card.js'
//import { shuffle } from '../helpers/shuffle.js'

let dataDuplicate = data.items;
//console.log('Aqui se usa la data random', shuffle())
dataDuplicate = dataDuplicate.concat(data.items);

export const App = ()=> {
  const container = document.createElement('section')
  container.className = 'showCards'
  dataDuplicate.forEach(tecnologia=>{
    container.appendChild(Card(tecnologia))
  })
  return container;
};
export default App;
