const Title = () => {
    const instructions = document.createElement('h2');
  
    instructions.className = 'insertTitle';
    instructions.textContent = 'Juego de Memoria para desarrollador@s';
  
    return instructions;
  };
  
  export default Title;