import {shuffle} from '/helpers/shuffle.js'


export const Button = () => {
  const btn = document.createElement('button');

  btn.className = 'startBtn';
  btn.textContent = 'Reiniciar Partida';
  //btn.addEventListener('click',shuffle());

  return btn;
};


