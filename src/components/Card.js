export const Card = (tecnologia)=>{
  let mainCards = document.createElement("div");
  // tip para probar si funciona sustituye la clase de abajo por mainCards.className = 'viewCards active';
  mainCards.className = 'viewCards'; // la clase ViewCards deberia ser la clase que NO muestra nada

  // Aqui crear el evento di da clic 
  // ocurre mainCards.className = 'viewCards active'; añádes la clase active, la clase active SI muestra las tecnologias
  const img = document.createElement('img');
  img.src = tecnologia.image;
  img.className= 'imgTecnology';
  mainCards.appendChild(img);
  
  return mainCards;
}

