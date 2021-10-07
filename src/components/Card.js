//import data from '../data/webdev/webdev.js'
export const Card = (tecnologia)=>{
  let mainCards = document.createElement("div");
  mainCards.className = 'viewCards';  
  mainCards.className = 'viewCardsActive'; 
  
  const img = document.createElement('img');
  img.src = tecnologia.image;
  img.className= 'imgTecnology';
  mainCards.appendChild(img);

  const logo = document.createElement('img');
  logo.src = './Images/logo.jpg';
  logo.className = 'imgBack';
  mainCards.setAttribute('id', tecnologia.id);
  mainCards.appendChild(logo);
  
  return mainCards;
}

