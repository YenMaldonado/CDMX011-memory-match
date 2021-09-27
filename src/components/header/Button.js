
export const Button = () => {
  const btn = document.createElement('button');

  btn.className = 'startBtn';
  btn.textContent = 'Reiniciar Partida';

  return btn;
//Button.addEventListener('click', App());
};
export default Button