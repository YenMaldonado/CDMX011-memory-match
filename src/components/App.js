import {Card} from './Card.js'
import {shuffle} from '../helpers/shuffle.js'

shuffle();
export const App = ()=> {
  const container = document.createElement('section')
  container.className = 'showCards'
  shuffle().forEach(tecnologia=>{
    container.appendChild(Card(tecnologia))
  })
  return container;
};
export default App;
