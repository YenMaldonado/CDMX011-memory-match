import {shuffle} from '/helpers/shuffle.js'
import { App } from '../App.js'
//shuffle();

export const Button = () => {
  const btn = document.createElement('button');

  btn.className = 'startBtn';
  btn.textContent = 'Reiniciar Partida';

  btn.addEventListener('click', () => {
    let shuffledCards = shuffle();
    App(shuffledCards);
    
  });

  return btn;
};


