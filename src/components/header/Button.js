const Button = () => {
  const btn = document.createElement('button');

  btn.className = 'startBtn';
  btn.textContent = 'Reiniciar Partida';
  


  /*document.querySelector(".startBtn").addEventListener("click",() => { 
    App.getCards(cards);*/
  return btn;
}

export default Button;
