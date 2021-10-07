const Description = () => {
    const description = document.createElement('h4');
  
    description.className = 'instructions';
    description.textContent = 'Selecciona 2 cartas para comenzar la partida.';
  
    return description;
};
  
export default Description;
