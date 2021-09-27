import Button from "./Button.js"
import Description from "./Description.js";
import Title from "./Title.js";

const Header = () => {
    const container = document.createElement('div');
  
    container.className = 'description';
    container.appendChild(Title());
    container.appendChild(Description());
    container.appendChild(Button());
    //console.log(container);
    return container;
  };
 
  export default Header;