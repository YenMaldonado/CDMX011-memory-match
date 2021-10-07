import { Card } from './Card.js'
import { shuffle } from '../helpers/shuffle.js'

//shuffle();
export const App = () => {
  /*const container = document.createElement('div')
  container.className = 'showCards'*/
  const container = document.querySelector('.showCards');
  container.innerHTML = '';
  shuffle().forEach(tecnologia => {
    container.appendChild(Card(tecnologia))
  })
  return container;
};

