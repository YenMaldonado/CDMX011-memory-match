import {shuffle} from '/helpers/shuffle.js'
import { App } from '../App.js'
//shuffle();

export const Button = () => {
  const btn = document.createElement('button');

  btn.className = 'startBtn';
  btn.textContent = 'Reiniciar Partida';

  btn.addEventListener('click', () => {
    /*const rootElement = document.querySelector('#root');
    const conteinShuffle = document.querySelector('.showCards');
    rootElement.removeChild(conteinShuffle);*/

    let shuffledCards = shuffle();
    App(shuffledCards);
    // manipular el dom 
  });

  return btn;
};


